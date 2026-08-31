import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaPen,
  FaShieldAlt,
  FaTrash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@/components/ui/Modal";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/services/orderService";
import { uploadPaymentProof } from "@/services/uploadService";

const PaymentProof = () => {
  const { items, checkoutDetails, clearCart } = useCart();
  const navigate = useNavigate();
  const [proof, setProof] = useState(null);
  const [proofPreview, setProofPreview] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [isReviewed, setIsReviewed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const fileInputRef = useRef(null);
  const previewUrlRef = useRef("");
  const total = items.reduce((sum, item) => sum + item.fixedPrice, 0);

  useEffect(
    () => () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    },
    [],
  );

  const productHref = (item) =>
    `/merchandise/${item.product.slug}/customize?size=${item.size}&order=${item.orderType}&cartItem=${item.id}`;

  const selectProof = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Please choose an image smaller than 5MB.");
      event.target.value = "";
      return;
    }

    setUploadError("");
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const previewUrl = URL.createObjectURL(file);
    previewUrlRef.current = previewUrl;
    setProofPreview(previewUrl);
    setProof(file);
  };

  const removeProof = () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = "";
    setProof(null);
    setProofPreview("");
    setUploadError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const submitOrder = async () => {
    if (!checkoutDetails) {
      setSubmissionError("Please complete your customer information first.");
      return;
    }

    const orderItems = items.map((item) => ({
      itemId: item.product.databaseItemId,
      size: item.size,
      rightSleeveDesign:
        item.sleeveCustomization?.right === "blank"
          ? null
          : item.sleeveCustomization?.right,
      leftSleeveDesign:
        item.sleeveCustomization?.left?.option === "name"
          ? item.sleeveCustomization.left.text
          : null,
    }));

    if (!items.length || orderItems.some((item) => !Number.isInteger(item.itemId))) {
      setSubmissionError(
        "A product is missing its backend item ID. Return to Merchandise and select the product again.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const uploadedFile = await uploadPaymentProof(proof);
      await createOrder({
        ...checkoutDetails,
        total,
        deliveryMethod: checkoutDetails.deliveryMethod.toUpperCase(),
        fileId: uploadedFile.id,
        items: orderItems,
      });
      setIsReviewed(true);
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const finishOrder = () => {
    clearCart();
    navigate("/merchandise");
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-14">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <Link to="/merchandise" className="hover:text-[#142f55]">
          Merchandise
        </Link>
        {items[0] && (
          <>
            <span className="px-2">/</span>
            <Link to={productHref(items[0])} className="hover:text-[#142f55]">
              Product 1
            </Link>
          </>
        )}
        {items[1] && (
          <>
            <span className="px-2">/</span>
            <Link to={productHref(items[1])} className="hover:text-[#142f55]">
              Product 2
            </Link>
          </>
        )}
        <span className="px-2">/</span>
        <Link to="/my-orders" className="hover:text-[#142f55]">
          My Order
        </Link>
        <span className="px-2">/</span>
        <Link to="/payment" className="hover:text-[#142f55]">
          Payment
        </Link>
        <span className="px-2">/</span>
        <span aria-current="page">Payment Proof</span>
      </nav>
      <h1 className="mt-8 text-3xl font-bold text-[#142f55]">Payment Proof</h1>
      <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
        {proof ? (
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <img
              src={proofPreview}
              alt={`Payment proof: ${proof.name}`}
              className="h-80 w-full object-contain bg-slate-50 p-4"
            />
            <div className="flex flex-col gap-4 border-t border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="truncate text-sm font-medium text-[#142f55]">
                {proof.name}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#142f55] px-4 py-2 font-semibold text-[#142f55] hover:bg-slate-50"
                >
                  <FaPen aria-hidden="true" /> Replace
                </button>
                <button
                  type="button"
                  onClick={removeProof}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50"
                >
                  <FaTrash aria-hidden="true" /> Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <label
            htmlFor="payment-proof-upload"
            className="flex min-h-80 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 text-center"
          >
            <FaCloudUploadAlt className="text-7xl text-[#142f55]" />
            <span className="mt-5 text-xl font-bold text-[#142f55]">
              Click to upload
            </span>
            <span className="mt-1 text-gray-500">PNG, JPG, JPEG (Max 5MB)</span>
          </label>
        )}
        <input
          ref={fileInputRef}
          id="payment-proof-upload"
          type="file"
          accept="image/png,image/jpeg"
          className="sr-only"
          onChange={selectProof}
        />
        {uploadError && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {uploadError}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={submitOrder}
        disabled={!proof || isSubmitting}
        className="mt-8 w-full cursor-pointer rounded-lg bg-[#142f55] py-4 text-xl font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Payment"}
      </button>
      {submissionError && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {submissionError}
        </p>
      )}
      <Modal
        isOpen={isReviewed}
        onClose={finishOrder}
        contentClassName="w-full max-w-md rounded-2xl p-7 text-center"
      >
        <FaCheckCircle
          aria-hidden="true"
          className="mx-auto text-6xl text-green-500"
        />
        <h2 className="mt-4 text-2xl font-bold text-[#142f55]">
          Payment proof received
        </h2>
        <p className="mt-3 text-gray-600">
          Your payment proof has been submitted successfully and is now safely
          queued for staff review.
        </p>
        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-left text-sm text-gray-700">
          <p className="flex items-center gap-2 font-semibold text-[#142f55]">
            <FaShieldAlt aria-hidden="true" className="text-green-600" />
            What happens next
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Our staff will verify your payment details.</li>
            <li>You will be alerted once the review is complete.</li>
            <li>Your receipt number will be sent after approval.</li>
          </ul>
        </div>
        <p className="mt-5 text-sm text-gray-500">
          You can safely return to Merchandise while we review your payment.
        </p>
        <button
          type="button"
          onClick={finishOrder}
          className="mt-6 cursor-pointer rounded-lg bg-[#142f55] px-6 py-3 font-bold text-white"
        >
          Back to Merchandise
        </button>
      </Modal>
    </main>
  );
};
export default PaymentProof;

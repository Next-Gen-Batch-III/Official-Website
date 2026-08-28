import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTypeCard from "@/components/cards/OrderTypeCard";
import MerchandiseOrderModal from "@/components/merchandise/MerchandiseOrderModal";
import GroupOrderModal from "@/components/merchandise/GroupOrderModal";
import {
  merchandiseFeatures,
  merchandiseHero,
  merchandiseItems,
  merchandiseOrderTypes,
  coupleChoices,
} from "@/data/merchandise";

const Merchandise = () => {
  const [searchParams] = useSearchParams();
  const resumedOrder = merchandiseOrderTypes.find(
    (order) => order.id === searchParams.get("order"),
  );
  const [activeOrder, setActiveOrder] = useState(resumedOrder || null);

  const closeOrder = () => setActiveOrder(null);

  return (
    <>
      <MerchandiseHero />

      <section
        className="bg-slate-50 px-6 py-14 sm:px-10 lg:px-14 lg:py-20"
        aria-labelledby="order-options-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <h2
              id="order-options-heading"
              className="mt-2 text-3xl font-bold text-primary sm:text-4xl"
            >
              CHOSE YOUR ORDER TYPE
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {merchandiseOrderTypes.map((order) => (
              <OrderTypeCard
                key={order.id}
                order={order}
                onOrder={setActiveOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {activeOrder?.id !== "group" && (
        <MerchandiseOrderModal
          order={activeOrder}
          products={(activeOrder?.id === "couple"
            ? coupleChoices.map((choice) => ({
                merchandiseId: choice.productIds[0],
                label: choice.label,
                price: choice.price,
                choiceId: choice.id,
              }))
            : activeOrder?.items || []
          ).map((item, index) => ({
            ...merchandiseItems[item.merchandiseId],
            ...item,
            id: `${item.merchandiseId}-${index}`,
            name: item.label,
          }))}
          onClose={closeOrder}
          bundleId={searchParams.get("bundle")}
        />
      )}
      <GroupOrderModal
        isOpen={activeOrder?.id === "group"}
        onClose={closeOrder}
      />
    </>
  );
};

export default Merchandise;

const MerchandiseHero = () => {
  const [mainImageId, setMainImageId] = useState("primary");
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const [thumbnailOffset, setThumbnailOffset] = useState({ x: 260, y: -150 });
  const images = [
    {
      id: "primary",
      src: merchandiseHero.primaryImage,
      alt: "Next-Gen polo shirt",
    },
    {
      id: "secondary",
      src: merchandiseHero.secondaryImage,
      alt: "Next-Gen T-shirt",
    },
  ];
  const secondaryImageId =
    images.find((image) => image.id !== mainImageId)?.id || "secondary";

  const swapImages = () => {
    if (isImageTransitioning) return;

    setIsImageTransitioning(true);
    window.setTimeout(() => {
      setMainImageId(secondaryImageId);
      setThumbnailOffset(({ x, y }) => ({ x, y: -y }));
      setIsImageTransitioning(false);
    }, 600);
  };

  const imageTransform = (imageId) => {
    const isMainImage = imageId === mainImageId;
    if (isImageTransitioning) {
      return isMainImage
        ? `translate(-50%, -50%) translate(${thumbnailOffset.x}px, ${-thumbnailOffset.y}px) scale(0.25)`
        : "translate(-50%, -50%) scale(1)";
    }

    return isMainImage
      ? "translate(-50%, -50%) scale(1)"
      : `translate(-50%, -50%) translate(${thumbnailOffset.x}px, ${thumbnailOffset.y}px) scale(0.25)`;
  };

  return (
    <>
      <section className="relative overflow-hidden border-l-2 border-cyan-400 bg-[#142f55] text-white">
        <div className="mx-auto grid min-h-[460px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
          {/* Content */}
          <div className="relative z-10">
            {/* Section label */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-white/60" />

              <p className="text-xs font-medium text-white/60 sm:text-sm">
                NGEP - Batch III: Official Merchandise
              </p>

              <span className="hidden h-px w-20 bg-white/60 sm:block" />
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Wear the Spirit.
              <span className="block">Represent Next-Gen.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              High-quality shirts designed for the Next-Gen Engagement Program
              community. Customize it your way and make it uniquely yours.
            </p>

            {/* Features */}
            <div className="mt-7 flex flex-wrap gap-3">
              {merchandiseFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex min-h-12 items-center gap-3 rounded-xl border-2 border-white/75 px-4 py-2.5 text-sm text-white/85 transition duration-300"
                  >
                    <Icon className="text-2xl" aria-hidden="true" />

                    <span className="whitespace-nowrap">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product images */}
          <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[400px]">
            <div className="absolute h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-80 sm:w-80" />
            {images.map((image) => {
              const isMainImage = image.id === mainImageId;
              const isSecondaryImage = !isMainImage;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={isSecondaryImage ? swapImages : undefined}
                  disabled={!isSecondaryImage || isImageTransitioning}
                  aria-label={
                    isSecondaryImage
                      ? `Show ${image.alt} as the main product image`
                      : undefined
                  }
                  className={`group absolute left-1/2 top-1/2 w-full max-w-[270px] appearance-none border-0 bg-transparent p-0 transition-transform duration-[600ms] ease-in-out sm:max-w-[320px] lg:max-w-[370px] ${isMainImage ? "z-10 cursor-default" : "z-20 cursor-pointer"}`}
                  style={{ transform: imageTransform(image.id) }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-contain drop-shadow-2xl transition-transform duration-200 ${isSecondaryImage ? "group-hover:scale-105 group-focus-visible:scale-105" : ""}`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

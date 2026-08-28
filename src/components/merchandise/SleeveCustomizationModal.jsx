import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Modal from "@/components/ui/Modal";
import { merchandiseSleeveCustomization } from "@/data/merchandise";

const RadioOption = ({ checked, children, onClick, className = "" }) => (
  <button type="button" onClick={onClick} className={`w-full cursor-pointer rounded-xl border p-4 text-left transition ${checked ? "border-[#142f55]" : "border-gray-300 hover:border-[#142f55]"} ${className}`}>
    <span className="flex items-center gap-5"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${checked ? "border-[#142f55]" : "border-gray-400"}`}>{checked && <span className="h-4 w-4 rounded-full bg-[#142f55]" />}</span><span className="text-xl leading-tight text-[#142f55]">{children}</span></span>
  </button>
);

const SleeveCustomizationModal = ({ initialValue, onClose, onSave }) => {
  const [customization, setCustomization] = useState(initialValue);
  const { leftOptions, rightOptions } = merchandiseSleeveCustomization;

  const updateLeft = (option) => setCustomization((current) => ({ ...current, left: { ...current.left, option } }));

  return (
    <Modal isOpen onClose={onClose} contentClassName="w-full max-w-6xl rounded-2xl p-5 sm:p-8">
      <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">Customize Your Shirt</h2>
      <div className="mt-6 grid overflow-hidden rounded-3xl border border-gray-300 md:grid-cols-2">
        <section className="p-5 sm:p-8 md:border-r md:border-gray-300">
          <h3 className="text-xl font-bold text-[#142f55]">Left Sleeve (Choose 1)</h3>
          <p className="mt-1 text-lg text-gray-600">Add your name or keep it blank</p>
          <div className="mt-6 space-y-3">
            {leftOptions.map((option) => (
              option.value === "name" && customization.left.option === "name" ? (
                <div key={option.value} className="rounded-xl border border-[#142f55]">
                  <RadioOption checked onClick={() => updateLeft(option.value)} className="rounded-b-none border-0">
                    {option.label}
                  </RadioOption>
                  <input value={customization.left.text} onChange={(event) => setCustomization((current) => ({ ...current, left: { ...current.left, text: event.target.value } }))} placeholder="Enter your name" className="mb-4 ml-12 w-[calc(100%-4rem)] rounded-lg border border-gray-400 px-4 py-3 text-lg text-gray-700 focus:border-[#142f55] focus:outline-none" />
                </div>
              ) : (
                <RadioOption key={option.value} checked={customization.left.option === option.value} onClick={() => updateLeft(option.value)}>
                  {option.label} {option.detail && <span className="text-gray-500">{option.detail}</span>}
                </RadioOption>
              )
            ))}
          </div>
        </section>
        <section className="border-t border-gray-300 p-5 sm:p-8 md:border-l-0 md:border-t-0">
          <h3 className="text-xl font-bold text-[#142f55]">Right Sleeve (Choose 1)</h3>
          <p className="mt-1 text-lg text-gray-600">Select your preferred title.</p>
          <div className="mt-6 space-y-3">
            {rightOptions.map((option) => <RadioOption key={option.value} checked={customization.right === option.value} onClick={() => setCustomization((current) => ({ ...current, right: option.value }))}>{option.label} {option.detail && <span className="text-gray-500">{option.detail}</span>}</RadioOption>)}
          </div>
        </section>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <p className="flex items-center gap-3 rounded-xl bg-[#d6dce6] px-5 py-4 text-sm text-[#142f55]"><FaInfoCircle className="shrink-0 text-2xl" />You must select exactly one option for each sleeve to continue.</p>
        <button type="button" onClick={() => onSave(customization)} className="cursor-pointer rounded-xl bg-[#142f55] px-5 py-4 text-2xl font-bold text-white transition hover:bg-[#0d2340]">Save Customization</button>
      </div>
    </Modal>
  );
};

export default SleeveCustomizationModal;

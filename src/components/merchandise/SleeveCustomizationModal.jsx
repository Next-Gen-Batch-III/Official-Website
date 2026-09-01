import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Modal from "@/components/ui/Modal";
import { merchandiseSleeveCustomization } from "@/data/merchandise";

const RadioOption = ({ checked, children, onClick, className = "" }) => (
  <button type="button" onClick={onClick} className={`w-full cursor-pointer rounded-lg border p-3 text-left transition ${checked ? "border-[#142f55] bg-slate-50" : "border-gray-300 hover:border-[#142f55]"} ${className}`}>
    <span className="flex items-center gap-3"><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${checked ? "border-[#142f55]" : "border-gray-400"}`}>{checked && <span className="h-3 w-3 rounded-full bg-[#142f55]" />}</span><span className="text-base leading-tight text-[#142f55]">{children}</span></span>
  </button>
);

const SleeveCustomizationModal = ({ initialValue, onClose, onSave }) => {
  const [customization, setCustomization] = useState(initialValue);
  const { leftOptions, rightOptions } = merchandiseSleeveCustomization;

  const updateLeft = (option) => setCustomization((current) => ({ ...current, left: { ...current.left, option } }));

  return (
    <Modal
      isOpen
      onClose={onClose}
      contentClassName="max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl p-5 sm:p-6"
    >
      <h2 className="pr-10 text-center text-xl font-bold text-black sm:text-2xl">Customize Your Shirt</h2>
      <div className="mt-5 grid overflow-hidden rounded-xl border border-gray-200 md:grid-cols-2">
        <section className="p-4 sm:p-5 md:border-r md:border-gray-200">
          <h3 className="text-base font-bold text-[#142f55]">Left Sleeve</h3>
          <p className="mt-1 text-sm text-gray-600">Add your name or keep it blank.</p>
          <div className="mt-4 space-y-2">
            {leftOptions.map((option) => (
              option.value === "name" && customization.left.option === "name" ? (
                <div key={option.value} className="rounded-lg border border-[#142f55]">
                  <RadioOption checked onClick={() => updateLeft(option.value)} className="rounded-b-none border-0">
                    {option.label}
                  </RadioOption>
                  <input value={customization.left.text} onChange={(event) => setCustomization((current) => ({ ...current, left: { ...current.left, text: event.target.value } }))} placeholder="Enter your name" className="mb-3 ml-9 w-[calc(100%-3.25rem)] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-[#142f55] focus:outline-none" />
                </div>
              ) : (
                <RadioOption key={option.value} checked={customization.left.option === option.value} onClick={() => updateLeft(option.value)}>
                  {option.label} {option.detail && <span className="text-gray-500">{option.detail}</span>}
                </RadioOption>
              )
            ))}
          </div>
        </section>
        <section className="border-t border-gray-200 p-4 sm:p-5 md:border-l-0 md:border-t-0">
          <h3 className="text-base font-bold text-[#142f55]">Right Sleeve</h3>
          <p className="mt-1 text-sm text-gray-600">Select your preferred title.</p>
          <div className="mt-4 space-y-2">
            {rightOptions.map((option) => <RadioOption key={option.value} checked={customization.right === option.value} onClick={() => setCustomization((current) => ({ ...current, right: option.value }))}>{option.label} {option.detail && <span className="text-gray-500">{option.detail}</span>}</RadioOption>)}
          </div>
        </section>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1.4fr_1fr]">
        <p className="flex items-center gap-2 rounded-lg bg-[#d6dce6] px-3 py-2.5 text-xs text-[#142f55]"><FaInfoCircle className="shrink-0 text-lg" />Select one option for each sleeve.</p>
        <button type="button" onClick={() => onSave(customization)} className="cursor-pointer rounded-lg bg-[#142f55] px-4 py-3 text-base font-bold text-white transition hover:bg-[#0d2340]">Save Customization</button>
      </div>
    </Modal>
  );
};

export default SleeveCustomizationModal;

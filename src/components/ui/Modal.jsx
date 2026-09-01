


const Modal = ({ isOpen, onClose, children, contentClassName = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button className="absolute inset-0 cursor-default bg-black/50" aria-label="Close modal" onClick={onClose} />
      <div className={`relative z-10 rounded-lg bg-white p-6 ${contentClassName}`} role="dialog" aria-modal="true">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-[#142f55] transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142f55]"
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;

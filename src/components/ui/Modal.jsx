


const Modal = ({ isOpen, onClose, children, contentClassName = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button className="absolute inset-0 cursor-default bg-black/50" aria-label="Close modal" onClick={onClose} />
      <div className={`relative z-10 rounded-lg bg-white p-6 ${contentClassName}`} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  )
}

export default Modal;

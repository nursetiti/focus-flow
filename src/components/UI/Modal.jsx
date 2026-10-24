import "../styles.css"
import { createPortal } from "react-dom"
import { FiX } from "react-icons/fi"

export default function Modal({ onClose, children }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          aria-label="Close"
          onClick={onClose}
        >
          <FiX size={18} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
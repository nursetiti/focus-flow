import "./styles.css"
import { FiX } from 'react-icons/fi'


export default function AddCourse(){
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-btn" aria-label="cancel">
                            <FiX size={18} />
                          </button>
                <h1>Hi</h1>
            </div>
        </div>
    )
}
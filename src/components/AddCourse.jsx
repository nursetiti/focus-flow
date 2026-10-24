import "./styles.css"
import Modal from "./UI/Modal"
import { useState } from "react"


export default function AddCourse({onClose, addCourseHandler}){
    const [selectedColor, setSelectedColor] = useState("purple")
    const colors = [
    { name: "purple", code: "#5046E5" },
    { name: "aqua", code: "#0F9D8A" },
    { name: "orange", code: "#D97706" },
    { name: "blue", code: "#2563EB" }
    ]
    

    return(
        <Modal onClose={onClose}>
            <form className="add-course-form" action={addCourseHandler}>
                <input type="hidden" name="colorName" value={selectedColor} />
                <h1>Add Course</h1>
                <p>Set up your course. You can edit anytime.</p>

                <div className="add-form-input">
                    <div className="form-group">
                        <label htmlFor="course-name">Course Name</label>
                        <input id="course-name" name="courseName" placeholder="Course Name" />
                    </div>

                    <div className="form-group course-code">
                        <label htmlFor="course-code">Course Code</label>
                        <input id="course-code" name="courseCode" placeholder="CSC 415" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="studyGoals">Weekly study goal (hours)</label>
                        <input id="studyGoals" name="studyGoals" type="number" placeholder="6" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="topicsNo">No. of topics</label>
                        <input id="topicsNo" name="topicsNo" type="number" placeholder="10" />
                    </div>
                </div>
                <div className="course-color">
                    <p>Colour</p>

                    <div className="color-options">
                        {colors.map(color => (
                            <button
                                key={color.name}
                                type="button"
                                name ="colorName"
                                className={`${color.name} ${selectedColor === color.name ? "selected" : ""}`}
                                style={{ backgroundColor: color.code }}
                                onClick={() => setSelectedColor(color.name)}
                                aria-label={color.name}
                                aria-pressed={selectedColor === color.name}
                            />
                        ))}
                    </div>
                </div>

                <div className="extra">
                    <label htmlFor="notes">Notes (optional)</label>
                <input
                    id="notes"
                    name="notes"
                    placeholder="Exam date, lecturer, textbook"
                />
                </div>

                <div className="form-actions">
                    <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                    <button type="submit" className="save-btn">Save course</button>
                </div>
            </form>
        </Modal>
    )
}
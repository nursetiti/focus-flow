import { FiPlus } from 'react-icons/fi'
import CourseCard from './CourseCard'
import coursesData from './coursesData.js'
import AddCourse from './AddCourse.jsx'
import { useState } from 'react'
// import "./styles.css"

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hoursDone = coursesData.reduce((sum, c) => sum + c.hoursDone, 0)
  const weeklyGoal = 18

  function addCourse(){
    setIsModalOpen((prev) => !prev)
  }
  return (
    <section className="course-section">
      <div className="course-header">
        <div>
          <h1 className="course-title">Courses</h1>
          <p className="course-subtitle">
            {coursesData.length} courses this semester · {hoursDone} of {weeklyGoal} hours studied this week
          </p>
        </div>
        <button type="button" className="add-btn" onClick={addCourse}>
          <FiPlus size={16} /> Add course
        </button>
      </div>

      <div className="course-grid" >
        {coursesData.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
        <div className="empty-course" onClick={addCourse}>
        <h2 className='add-course-empty'>+</h2>
        <p>Add course</p>
      </div>
      </div>
      {isModalOpen && <AddCourse/>}
    </section>
  )
}
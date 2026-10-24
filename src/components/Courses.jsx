import { FiPlus } from 'react-icons/fi'
import CourseCard from './CourseCard'
import coursesData from './coursesData.js'
import AddCourse from './AddCourse.jsx'
import { useState } from 'react'
import "./styles.css"

const courseColors = {
  purple: {
    color: "#5046E5",
    soft: "#EEEDFF",
    ink: "#5046E5",
  },
  aqua: {
    color: "#0F9D8A",
    soft: "#E0F7F4",
    ink: "#0F766E",
  },
  orange: {
    color: "#D97706",
    soft: "#FEF3C7",
    ink: "#92400E",
  },
  blue: {
    color: "#2563EB",
    soft: "#DBEAFE",
    ink: "#1D4ED8",
  },
};
export default function Courses() {
  const [currentCourses, setCurrentCourses] = useState(coursesData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hoursDone = coursesData.reduce((sum, c) => sum + c.hoursDone, 0)
  const weeklyGoal = 18


  function openModal() {
  setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  
function addCourseHandler(formData) {
  const newCourse = Object.fromEntries(formData);

  const selectedColors = courseColors[newCourse.colorName];

  const course = {
    id: Date.now(),
    name: newCourse.courseName,
    code: newCourse.courseCode,
    hoursGoal: Number(newCourse.studyGoals),
    hoursDone: 0,
    topicsTotal: Number(newCourse.topicsNo),
    topicsDone: 0,
    ...selectedColors,
  };

  setCurrentCourses((prev) => [...prev, course]);
  closeModal();
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
        <button type="button" className="add-btn" onClick={openModal}>
          <FiPlus size={16} /> Add course
        </button>
      </div>

      <div className="course-grid" >
        {currentCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
        <div className="empty-course" onClick={openModal}>
        <h2 className='add-course-empty'>+</h2>
        <p>Add course</p>
      </div>
      </div>
      {isModalOpen && <AddCourse addCourseHandler={addCourseHandler} onClose={closeModal}/>}
    </section>
  )
}
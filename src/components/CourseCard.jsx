import '../components/styles.css'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function CourseCard({
  code, name, hoursDone, hoursGoal, topicsDone, topicsTotal, next,
  color, soft, ink, onEdit, onDelete,}) {
  const pct = Math.min(100, (hoursDone / hoursGoal) * 100)
  console.log(name, color);
 
  return (
    <div
      className="course-card"
      style={{ '--course': color, '--course-soft': soft, '--course-ink': ink }}
    >
      <div className="card-header">
        <p className="card-code">{code}</p>
        <div className="card-actions">
          <button className="icon-btn" aria-label={`Edit ${name}`} onClick={onEdit}>
            <FiEdit2 size={18} />
          </button>
          <button className="icon-btn" aria-label={`Delete ${name}`} onClick={onDelete}>
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>

      <h2 className="card-course">{name}</h2>

      <div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="progress-analysis">
          <span>{hoursDone} / {hoursGoal}h this week</span>
          <span>{topicsDone} of {topicsTotal} topics</span>
        </div>
      </div>

      <p className="card-footer">Next up: {next}</p>
    </div>
  )
}
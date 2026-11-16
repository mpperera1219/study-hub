function CourseCard({ course }) {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#7f8c8d' }}>{course.code}</span>
      <h3 style={{ margin: '8px 0', color: '#2c3e50' }}>{course.title}</h3>
      <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>Credits: {course.credits} | Level: {course.level}</p>
      <div style={{ marginTop: '15px' }}>
        <span style={{
          padding: '5px 10px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: course.completed ? '#2e7d32' : '#d97706'
        }}>
          {course.completed ? 'Completed' : 'In progress'}
        </span>
      </div>
    </div>
  );
}

export default CourseCard;
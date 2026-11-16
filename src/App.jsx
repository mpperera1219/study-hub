import CourseCard from './CourseCard';
import { courses } from './data/courses';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ color: '#2c3e50' }}>Study Hub</h1>
      <h2 style={{ color: '#34495e', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>My courses</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
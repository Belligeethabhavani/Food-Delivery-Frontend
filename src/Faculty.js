const FacultyCards = ({ faculty }) => {
    return (
      <div className="faculty-container">
        {faculty.map((member, index) => (
          <div key={index} className="faculty-card">
            <img src={member.image} alt={member.name} className="faculty-image" />
            <h3>{member.name}</h3>
            <p>Employee ID: {member.employeeId}</p>
            <p>Course: {member.course}</p>
          </div>
        ))}
      </div>
      
    );
  };
  
  export default FacultyCards;



  /*
  import Studentcourse from './Studentcourse.js'
import './Studentcourse.css';
import Faculty from './Faculty.js';
import Week1_4fnl from './Week1_4fnl.js';
  
  const App = () => {
  const faculty = [
    { name: 'Dr. Smith', employeeId: '12345', course: 'Mathematics', image: 'falty1.webp' },
    { name: 'Dr. Johnson', employeeId: '67890', course: 'Physics', image: 'falty2.jpeg' },
    { name: 'Dr. Brown', employeeId: '11223', course: 'Chemistry', image: 'falty3.jpeg' },
    { name: 'Dr. Taylor', employeeId: '44556', course: 'Biology', image: 'falty4.jpeg' },
  ];

  return (
    <div style={{backgroundColor:"#CDE8E5"}}>
      <center>
      <Studentcourse/></center>
      <Faculty faculty={faculty} />
      <Week1_4fnl></Week1_4fnl>
     
    </div>
  );
};

export default App;
*/
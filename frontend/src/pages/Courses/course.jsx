import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './course.css';


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="courses-container">
      {loading && <p>Loading courses...</p>}
      {error && <p className="error-message">{error}</p>}
      <ul className="courses-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export const fetchCourses = async () => {
  try {
    const response = await axios.get('/api/courses');
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch courses');
  }
};

export default Courses;

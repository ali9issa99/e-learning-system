import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import './coursedetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseDetails(id);
        setCourse(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="course-details-container">
      {loading && <p>Loading course details...</p>}
      {error && <p className="error-message">{error}</p>}
      {course && (
        <div className="course-details">
          <h1>{course.title}</h1>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration} hours</p>
        </div>
      )}
    </div>
  );
};


export const fetchCourseDetails = async (id) => {
  try {
    const response = await axios.get(`/api/courses/${id}`);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch course details');
  }
};

export default CourseDetails;

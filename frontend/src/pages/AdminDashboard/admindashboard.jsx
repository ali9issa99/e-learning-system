import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './admindashboard.css';


const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAdminData();
        setAdminData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard-container">
      {loading && <p>Loading admin data...</p>}
      {error && <p className="error-message">{error}</p>}
      {adminData && (
        <div className="admin-dashboard">
          <h1>Admin Dashboard</h1>
          <div className="dashboard-section">
            <h2>Total Users</h2>
            <p>{adminData.totalUsers}</p>
          </div>
          <div className="dashboard-section">
            <h2>Total Courses</h2>
            <p>{adminData.totalCourses}</p>
          </div>
          <div className="dashboard-section">
            <h2>Recent Activities</h2>
            <ul>
              {adminData.recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};


export const fetchAdminData = async () => {
  try {
    const response = await axios.get('/api/admin/dashboard');
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch admin data');
  }
};

export default AdminDashboard;

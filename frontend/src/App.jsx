import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx"; 
import Register from "./pages/Register/register.jsx";
import Courses from "./pages/Courses/course.jsx";
import CourseDetails from "./pages/CoursesDetails/coursedetails.jsx";
import AdminDashboard from "./pages/AdminDashboard/admindashboard.jsx";
import Navbar from './components/navbar/navbar.jsx';



const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

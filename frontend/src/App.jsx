// import "./styles/App.css";
// import React from "react";
// import { BrowserRouter , Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Login from "./pages/Login/Login.jsx";
// // import Register from "./pages/Register";
// // import Courses from "./pages/Courses";
// // import CourseDetails from "./pages/CourseDetails";
// // import AdminDashboard from "./pages/AdminDashboard";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" exact component={Home} /> */}
//         <Route path="/login" component={Login} />
//         {/* <Route path="/register" component={Register} />
//         <Route path="/courses" component={Courses} />
//         <Route path="/course/:id" component={CourseDetails} />
//         <Route path="/admin-dashboard" component={AdminDashboard} /> */}
//       </Routes>
//     </BrowserRouter>
    
//   );
// };

// export default App;



import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx"; 
import Register from "./pages/Register/register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uncomment and correct these lines as needed */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/course/:id" element={<CourseDetails />} /> */}
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

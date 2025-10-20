import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VolunteerForm from "./Component/VolunteerForm";
import AllVolunteer from "./Component/AllVolunteer";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            <div className="text-center mt-10 space-x-2">
              <h1 className="text-3xl font-bold">
                Welcome to OMJ Volunteer Portal
              </h1>
              <Link
                to="/volunteers/add"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Become a Volunteer
              </Link>
              <Link
                to="/registration-form"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Become a Student
              </Link>
            </div>
          }
        />

        {/* Add Volunteer route */}
        <Route path="/volunteers/add" element={<VolunteerForm />} />
        <Route path="/volunteers" element={<AllVolunteer />} />
        <Route
          path="/registration-form"
          element={<StudentRegistrationForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;

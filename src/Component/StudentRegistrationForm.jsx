import React, { useState } from "react";
import StudentConfirmModal from "./StudentConfirmModal";

const StudentRegistrationForm = () => {
  // Mock hierarchical data
  const campusData = {
    "Karachi Campus": {
      courses: {
        "Web Development": ["Morning (9AM–12PM)", "Evening (4PM–7PM)"],
        "Graphic Design": ["Morning (8AM–11AM)", "Afternoon (1PM–4PM)"],
      },
    },
    "Hyderabad Campus": {
      courses: {
        "Mobile App Development": ["Morning (8AM–11AM)", "Evening (3PM–6PM)"],
        "Digital Marketing": [
          "Morning (10AM–1PM)",
          "Weekend (Sat–Sun 2PM–6PM)",
        ],
      },
    },
    "Islamabad Campus": {
      courses: {
        "AI & Machine Learning": ["Morning (9AM–12PM)", "Evening (4PM–7PM)"],
        "Cyber Security": ["Morning (10AM–1PM)", "Weekend (Sat–Sun 2PM–6PM)"],
      },
    },
  };
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    campus: "",
    course: "",
    favTime: "",
    fullName: "",
    guardianName: "",
    contact: "",
    email: "",
    cnic: "",
    gender: "",
    dob: "",
    qualification: "",
    address: "",
    city: "",
    profileImage: null,
  });

  // Derived lists
  const selectedCampus = campusData[form.campus];
  const courseList = selectedCampus ? Object.keys(selectedCampus.courses) : [];
  const timeList =
    selectedCampus && form.course ? selectedCampus.courses[form.course] : [];

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "campus") {
      setForm({ ...form, campus: value, course: "", favTime: "" });
    } else if (name === "course") {
      setForm({ ...form, course: value, favTime: "" });
    } else if (name === "profileImage") {
      setForm({ ...form, profileImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    alert("✅ Registration Confirmed and Submitted Successfully!");
    console.log("Form Submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Student Registration Form
        </h2>

        {/* ================== Dependent Dropdowns ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Campus */}
          <div>
            <label className="font-semibold">Campus *</label>
            <select
              name="campus"
              value={form.campus}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">Select Campus</option>
              {Object.keys(campusData).map((campus) => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
            </select>
          </div>

          {/* Course (depends on Campus) */}
          <div>
            <label className="font-semibold">Course *</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              disabled={!form.campus}
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">
                {form.campus ? "Select Course" : "Select Campus First"}
              </option>
              {courseList.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Favourite Time (depends on Course) */}
          <div>
            <label className="font-semibold">Your Favourite Time? *</label>
            <select
              name="favTime"
              value={form.favTime}
              onChange={handleChange}
              required
              disabled={!form.course}
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">
                {form.course ? "Select Time" : "Select Course First"}
              </option>
              {timeList.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ================== Rest of the Form ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="font-semibold">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Guardian Name *</label>
            <input
              type="text"
              name="guardianName"
              value={form.guardianName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Contact Number *</label>
            <input
              type="tel"
              name="contact"
              placeholder="03XXXXXXXXX"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">CNIC / BForm *</label>
            <input
              type="text"
              name="cnic"
              placeholder="4XXXXXXXXXXXXX"
              value={form.cnic}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Gender *</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Last Qualification *</label>
            <select
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">Select Option</option>
              <option value="Matric">Matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">City *</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div className="md:col-span-3">
            <label className="font-semibold">Permanent Address *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
              rows={2}
            ></textarea>
          </div>

          <div className="md:col-span-3">
            <label className="font-semibold">
              Passport Size Profile Image (Face Front and Decent Picture)
            </label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Form
          </button>
        </div>
      </form>

      {showModal && (
        <StudentConfirmModal
          data={form}
          onClose={() => setShowModal(false)}
          onConfirm={confirmSubmit}
        />
      )}
    </div>
  );
};

export default StudentRegistrationForm;

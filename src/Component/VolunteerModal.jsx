import React from "react";

const VolunteerModal = ({ volunteer, onClose }) => {
  if (!volunteer) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Volunteer Details {volunteer.volunteerId}
        </h2>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p>
            <strong>Full Name:</strong> {volunteer.fullName}
          </p>
          <p>
            <strong>Father Name:</strong> {volunteer.fatherName}
          </p>
          <p>
            <strong>Khundi:</strong> {volunteer.khundi}
          </p>
          <p>
            <strong>Gender:</strong> {volunteer.gender}
          </p>
          <p>
            <strong>DOB:</strong> {volunteer.dob}
          </p>
          <p>
            <strong>Contact:</strong> {volunteer.contact}
          </p>
          <p>
            <strong>Email:</strong> {volunteer.email}
          </p>
          <p>
            <strong>CNIC:</strong> {volunteer.cnic}
          </p>
          <p>
            <strong>Education:</strong> {volunteer.education}
          </p>
          <p>
            <strong>Institution:</strong> {volunteer.institution}
          </p>
          <p>
            <strong>Field:</strong> {volunteer.field}
          </p>
          <p>
            <strong>Experience:</strong> {volunteer.experience}
          </p>
          <p>
            <strong>Area:</strong> {volunteer.volunteerArea}
          </p>
          <p>
            <strong>Time:</strong> {volunteer.timeCommitment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;

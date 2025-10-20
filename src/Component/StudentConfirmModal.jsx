const StudentConfirmModal = ({ data, onClose, onConfirm }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
          Confirm Your Details
        </h2>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p>
            <strong>Campus:</strong> {data.campus}
          </p>
          <p>
            <strong>Course:</strong> {data.course}
          </p>
          <p>
            <strong>Preferred Time:</strong> {data.favTime}
          </p>
          <p>
            <strong>Full Name:</strong> {data.fullName}
          </p>
          <p>
            <strong>Guardian Name:</strong> {data.guardianName}
          </p>
          <p>
            <strong>Contact:</strong> {data.contact}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>CNIC:</strong> {data.cnic}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong> {data.dob}
          </p>
          <p>
            <strong>Qualification:</strong> {data.qualification}
          </p>
          <p>
            <strong>City:</strong> {data.city}
          </p>
          <p className="col-span-2">
            <strong>Address:</strong> {data.address}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Confirm Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentConfirmModal;

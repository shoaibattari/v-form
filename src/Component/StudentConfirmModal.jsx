import React from "react";

const StudentConfirmModal = ({ data, onClose, onConfirm }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Confirm Your Details
        </h2>

        <div className="max-h-[60vh] overflow-y-auto border p-4 rounded-lg bg-gray-50">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="font-semibold capitalize py-2 pr-4 w-1/3">
                    {key.replace(/([A-Z])/g, " $1")}
                  </td>
                  <td className="py-2">
                    {key === "profileImage" && value ? (
                      <img
                        src={URL.createObjectURL(value)}
                        alt="Profile Preview"
                        className="w-20 h-20 rounded object-cover border"
                      />
                    ) : (
                      value?.toString() || "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onConfirm(data)}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentConfirmModal;

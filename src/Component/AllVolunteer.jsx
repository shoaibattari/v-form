import React, { useEffect, useState } from "react";

const AllVolunteer = () => {
  const [volunteers, setVolunteers] = useState();
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ AllVolunteer ~ volunteers:", volunteers);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/volunteers/all-volunteers"
        );
        const data = await res.json();
        if (res.ok && data.status) {
          setVolunteers(data.data);
        } else {
          console.error("Error fetching:", data.message);
        }
      } catch (err) {
        console.error("Network error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading volunteers...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        👥 All Registered Volunteers
      </h2>

      {!volunteers ? (
        <p className="text-center text-gray-500">No volunteers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers?.map((v) => (
            <div
              key={v._id}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3 text-center">
                {v.fullName}
              </h3>

              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Father Name:</strong> {v.fatherName}
                </p>
                <p>
                  <strong>Khundi:</strong> {v.khundi}
                </p>
                <p>
                  <strong>Gender:</strong> {v.gender}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {v.dob}
                </p>
                <p>
                  <strong>Contact:</strong> {v.contact}
                </p>
                <p>
                  <strong>Email:</strong> {v.email}
                </p>
                <p>
                  <strong>Address:</strong> {v.address}
                </p>
                <p>
                  <strong>CNIC/B-Form:</strong> {v.cnic}
                </p>
                <p>
                  <strong>OMJ Card No:</strong> {v.omjCard}
                </p>
                <p>
                  <strong>Education:</strong> {v.education}
                </p>
                <p>
                  <strong>Institution:</strong> {v.institution}
                </p>
                <p>
                  <strong>Field of Study:</strong> {v.field}
                </p>
                <p>
                  <strong>Volunteer Area:</strong> {v.volunteerArea}
                </p>
                <p>
                  <strong>Prior Experience:</strong> {v.experience}
                </p>
                <p>
                  <strong>Time Commitment:</strong> {v.timeCommitment}
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Joined on {new Date(v.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolunteer;

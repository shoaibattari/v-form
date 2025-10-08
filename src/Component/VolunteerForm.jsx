import { useState } from "react";

const VolunteerForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    khundi: "",
    gender: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    cnic: "",
    omjCard: "",
    education: "",
    institution: "",
    field: "",
    volunteerArea: "",
    experience: "",
    timeCommitment: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/volunteers/add", {
        method: "POST",
        // mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      // Check status
      if (res.ok) {
        alert(data?.message || "✅ Form submitted successfully!");
        console.log("Server Response:", data);

        setForm({
          fullName: "",
          fatherName: "",
          khundi: "",
          gender: "",
          dob: "",
          contact: "",
          email: "",
          address: "",
          cnic: "",
          omjCard: "",
          education: "",
          institution: "",
          field: "",
          volunteerArea: "",
          experience: "",
          timeCommitment: "",
        });
      } else {
        alert(`❌ Error: ${data.message || "Something went wrong"}`);
        console.error("Error:", data);
      }
    } catch (err) {
      alert("Something went wrong!", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-400 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded-xl shadow-lg w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          🌟 Join the Social Welfare Committee as a Volunteer! 🌟
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          (An initiative of The Okhai Memon Jamat – Social Welfare Committee)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-2">
          <div>
            {/* Full Name */}
            <label className="block mb-2 font-semibold">
              Full Name (پورا نام) *
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Father Name */}
            <label className="block mb-2 font-semibold">
              Father Name (والد کا نام) *
            </label>
            <input
              type="text"
              name="fatherName"
              value={form.fatherName}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Khundi */}
            <label className="block mb-2 font-semibold">Khundi (کھنڈی) *</label>
            <input
              type="text"
              name="khundi"
              value={form.khundi}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Gender */}
            <label className="block mb-2 font-semibold">Gender (جنس) *</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male (مرد)</option>
              <option value="Female">Female (عورت)</option>
            </select>
          </div>

          <div>
            {/* DOB */}
            <label className="block mb-2 font-semibold">
              Date of Birth / Age (تاریخ پیدائش / عمر) *
            </label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Contact */}
            <label className="block mb-2 font-semibold">
              Contact Number (WhatsApp preferred) *
            </label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Email */}
            <label className="block mb-2 font-semibold">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Address */}
            <label className="block mb-2 font-semibold">
              Address (ایڈریس) *
            </label>
            <select
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            >
              <option value="">Select Area</option>
              <option value="Hussainabad | Karimabad">
                Hussainabad | Karimabad
              </option>
              <option value="Super Highway | Gulshan e Maymar | Hashambad">
                Super Highway | Gulshan e Maymar | Hashambad
              </option>
              <option value="Gulzar e Hijri | Mosmiyat | Gulistan e Johar">
                Gulzar e Hijri | Mosmiyat | Gulistan e Johar
              </option>
              <option value="Chandi Chowk | Housing Society | Hill Park">
                Chandi Chowk | Housing Society | Hill Park
              </option>
              <option value="Defence | Clifton">Defence | Clifton</option>
              <option value="Memon Society | Kharadar">
                Memon Society | Kharadar
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            {/* CNIC */}
            <label className="block mb-2 font-semibold">
              CNIC / B-Form Number *
            </label>
            <input
              type="text"
              name="cnic"
              value={form.cnic}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* OMJ Card */}
            <label className="block mb-2 font-semibold">
              OMJ CARD Number (اوکھائی میمن جماعت کارڈ نمبر)
            </label>
            <input
              type="text"
              name="omjCard"
              value={form.omjCard}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
            />
          </div>
          <div>
            {/* Education */}
            <label className="block mb-2 font-semibold">
              Current Education (موجودہ تعلیم) *
            </label>
            <select
              name="education"
              value={form.education}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            >
              <option value="">Select Education</option>
              <option value="Matriculation">Matriculation</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            {/* Institution */}
            <label className="block mb-2 font-semibold">
              Institution Name *
            </label>
            <input
              type="text"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
          </div>
          <div>
            {/* Field */}
            <label className="block mb-2 font-semibold">
              Field of Study / Major
            </label>
            <input
              type="text"
              name="field"
              value={form.field}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
            />
          </div>
          <div>
            {/* Volunteer Area */}
            <label className="block mb-2 font-semibold">
              Which area(s) would you like to volunteer in? *
            </label>
            <select
              name="volunteerArea"
              value={form.volunteerArea}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            >
              <option value="">Select Area</option>
              <option value="Digital & IT">💻 Digital & IT</option>
              <option value="Events & Logistics">🎪 Events & Logistics</option>
              <option value="Content & Advocacy">🗣️ Content & Advocacy</option>
              <option value="Media & Creative">🎨 Media & Creative</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            {/* Experience */}
            <label className="block mb-2 font-semibold">
              Prior Volunteer Experience? *
            </label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes (جی ہاں)</option>
              <option value="No">No (جی نہیں)</option>
            </select>
          </div>
          <div>
            {/* Time Commitment */}
            <label className="block mb-2 font-semibold">
              How much time can you dedicate? *
            </label>
            <select
              name="timeCommitment"
              value={form.timeCommitment}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="2–4 hours/week">2–4 hours/week</option>
              <option value="5–8 hours/week">5–8 hours/week</option>
              <option value="More than 8 hours/week">
                More than 8 hours/week
              </option>
              <option value="Weekend Only">Weekend Only</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;

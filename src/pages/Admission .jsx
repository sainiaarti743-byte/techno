import React, { useState } from "react";

const BASE_URL = "https://technoschool.co.in/admin";

const Admission = () => {
  const [form, setForm] = useState({
    name: "", dob: "", aadhar: "", mtongue: "",
    fname: "", mname: "",
    present1: "", present2: "", present3: "",
    permanent1: "", permanent2: "", permanent3: "",
    mobile: "", mno: "", gno: "",
    occupation: [],
    briefFather: "", briefMother: "",
    class: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const val = e.target.value;
    const updated = form.occupation.includes(val)
      ? form.occupation.filter((o) => o !== val)
      : [...form.occupation, val];
    setForm({ ...form, occupation: updated });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    const message = `
DOB: ${form.dob}
Aadhar: ${form.aadhar}
Mother's Tongue: ${form.mtongue}
Father Name: ${form.fname}
Mother Name: ${form.mname}
Present Address: ${form.present1}, ${form.present2}, ${form.present3}
Permanent Address: ${form.permanent1}, ${form.permanent2}, ${form.permanent3}
mobile: ${form.mobile}
Mother Phone: ${form.mno}
Guardian Phone: ${form.gno}
Occupation: ${form.occupation.join(", ")}
Brief Father: ${form.briefFather}
Brief Mother: ${form.briefMother}
Class: ${form.class}
    `;

    try {
      const res = await fetch(`${BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          class: form.class,
          message: message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("✅ Enquiry submitted! We will contact you soon.");
        setForm({
          name: "", dob: "", aadhar: "", mtongue: "",
          fname: "", mname: "",
          present1: "", present2: "", present3: "",
          permanent1: "", permanent2: "", permanent3: "",
          mobile: "", mno: "", gno: "",
          occupation: [],
          briefFather: "", briefMother: "",
          class: "",
        });
      } else {
        setError("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="mt-5 p-2"></div>

      <div className="container mt-5">
        <div id="admission">
          <h5>APPLICATION FORM FOR ADMISSION</h5>
          <p>
            Please use this form to apply for your child's admission to our school.
            We need complete & accurate information about the student. So make sure
            you fill out all fields.
          </p>

          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form">
            <label>1. Name of the student</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>2. Date Of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} required />

            <label>3. Aadhar Card No</label>
            <input type="number" name="aadhar" value={form.aadhar} onChange={handleChange} required />

            <label>4. Mother's Tongue</label>
            <input type="text" name="mtongue" value={form.mtongue} onChange={handleChange} required />

            <label>5. Name of the Father / Guardian</label>
            <input type="text" name="fname" value={form.fname} onChange={handleChange} required />

            <label>6. Name of the Mother / Guardian</label>
            <input type="text" name="mname" value={form.mname} onChange={handleChange} required />

            <label>7. Present Address</label>
            <input type="text" name="present1" className="address-line" value={form.present1} onChange={handleChange} required />
            <input type="text" name="present2" className="address-line" value={form.present2} onChange={handleChange} />
            <input type="text" name="present3" className="address-line" value={form.present3} onChange={handleChange} />

            <label>8. Permanent Address</label>
            <input type="text" name="permanent1" className="address-line" value={form.permanent1} onChange={handleChange} required />
            <input type="text" name="permanent2" className="address-line" value={form.permanent2} onChange={handleChange} />
            <input type="text" name="permanent3" className="address-line" value={form.permanent3} onChange={handleChange} />

            <label>9. Phone No. <span className="spacer">Father*</span></label>
            <input type="number" name="mobile" value={form.mobile} onChange={handleChange} required />

            <label><span className="spacer2">Mother</span></label>
            <input type="number" name="mno" value={form.mno} onChange={handleChange} required />

            <label><span className="spacer2">Guardian</span></label>
            <input type="number" name="gno" value={form.gno} onChange={handleChange} />

            <label>10. Occupation of Father / Mother / Guardian (✔)</label>
            <div className="checkbox-group">
              {["Service", "Profession", "Business"].map((occ) => (
                <label key={occ}>
                  <input
                    type="checkbox"
                    value={occ}
                    checked={form.occupation.includes(occ)}
                    onChange={handleCheckbox}
                  />{" "}
                  {occ}
                </label>
              ))}
            </div>

            <label>11. A brief about Occupation - Father</label>
            <input type="text" name="briefFather" value={form.briefFather} onChange={handleChange} required />

            <label><span className="spacer3">Mother</span></label>
            <input type="text" name="briefMother" value={form.briefMother} onChange={handleChange} />

            <label>Class</label>
            <select name="class" value={form.class} onChange={handleChange} required>
              <option value="">Select Class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => (
                <option key={c} value={c}>
                  {c === 1 ? "1st" : c === 2 ? "2nd" : c === 3 ? "3rd" : `${c}th`}
                </option>
              ))}
            </select>

            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
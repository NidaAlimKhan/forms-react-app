import React, { useState } from "react";
import './App.css'

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form
  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = "Full Name is required.";
    if (!formData.dob) formErrors.dob = "Date of Birth is required.";
    if (!formData.gender) formErrors.gender = "Gender is required.";
    if (!formData.email.trim()) formErrors.email = "Email is required.";
    if (!formData.phone.trim()) formErrors.phone = "Phone Number is required.";
    if (!formData.address.trim()) formErrors.address = "Address is required.";
    if (!formData.course) formErrors.course = "Course selection is required.";
    if (!formData.terms) formErrors.terms = "You must agree to the terms.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        terms: false,
      });
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center" }}>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        {/* Date of Birth */}
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}

        {/* Gender */}
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          /> Female
        </div>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

        {/* Email */}
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Phone */}
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        {/* Address */}
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          placeholder="Enter your address"
        />
        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}

        {/* Course */}
        <label>Course Applied For:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select a course</option>
          <option value="Engineering">Engineering</option>
          <option value="Medical">Medical</option>
          <option value="Business">Business</option>
          <option value="Arts">Arts</option>
        </select>
        {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}

        {/* Terms */}
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}

        {/* Submit */}
        <button type="submit" style={{ padding: "10px", background: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;

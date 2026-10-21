import React, { useState } from "react";

const FormValidation = () => {
  const [inputs, setInputs] = useState(
    {
      name: "",
      email: "",
      password: "",
    },
  );
  const [error, setErrors] = useState({});

  const ValidationForm = () => {
    const newErrors = {};
    if (!inputs.name.trim()) newErrors.name = "name requred";
    if (!inputs.email) {
      newErrors.email = "email requred";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = "enter correct email";
    }
    if (!inputs.password) {
      newErrors.password = "password requred";
    } else if (inputs.password.length < 8) {
      newErrors.password = "password must be 8 charater long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    // setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const confirm = window.confirm("are you sure");
    if (confirm && ValidationForm()) {
      console.log("Form successfully submitted:");
    } else {
      console.log("failed");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Validation Form</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleInputs}
          />
          {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInputs}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputs}
          />
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;

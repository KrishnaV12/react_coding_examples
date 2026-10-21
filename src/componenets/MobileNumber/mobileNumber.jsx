import react from "react";
import React, { useState } from "react";
import "./mobileNumber.css";

const MobileNumber = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneNumber = (e) => {
    const input = e.target.value;
    // const cleanString = input.replace(/\D/g, "");
    // const truncetInput = cleanString.slice(0, 9);

    let formatted = "";
    if (input.length > 0) {
      formatted = `(${input.slice(0, 3)}`;
    }
    if (input.length > 3) {
      formatted = `(${input.slice(0, 3)})${input.slice(3, 6)}`;
    }
    if (input.length > 6) {
      formatted = `(${input.slice(0, 3)})${input.slice(3, 6)},${input.slice(6, 9)}`;
    }
    setPhone(formatted);
  };

  return (
    <>
      <div className="wrapper">
        <label className="label" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="input"
          max={10}
          id="phone"
          type="text"
          placeholder="(123)3455 678"
          value={phone}
          onChange={handlePhoneNumber}
        />
      </div>
    </>
  );
};

export default MobileNumber;

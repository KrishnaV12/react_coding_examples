import React, { useState, useRef } from "react";

const LENGTH = 4;
const OTP = () => {
  const [optVal, setOtpVal] = useState(Array(LENGTH).fill(""));
  const ref = useRef([]);

  const handleChnage = (val, i) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...optVal];
    next[i] = val;
    setOtpVal(next);
    if (val && i < LENGTH - 1) ref.current[i + 1].focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !optVal[i] && i > 0) {
      ref.current[i - 1].focus()
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {optVal.map((val, i) => (
        <input
          key={val}
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          maxLength={1}
          value={val}
          onChange={(e) => handleChnage(e.target.value, i)}
          ref={(el) => (ref.current[i] = el)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      ))}
    </div>
  );
};

export default OTP;

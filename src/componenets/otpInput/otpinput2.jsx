import { useRef, useState } from "react";
/**
 * Q: Build a 6-digit OTP input with auto-focus next, backspace to previous, and paste support.
 * Tests: useRef arrays, keyboard handling, controlled inputs.
 * Frequently asked at every Bangalore startup.
 */

const LENGTH = 6;
const OTP2 = () => {
  const [otp, setOtp] = useState(Array(LENGTH).fill(""));
  const ref = useRef([]);

  function handleInputChnage(val, idx) {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < LENGTH - 1) {
      ref.current[idx + 1]?.focus();
    }
    console.log(ref.current, "handleInputChnage");
    console.log(otp[idx], "otp");
    console.log(!otp[idx], "handleKeyDown");
  }

  function handleKeyDown(e, idx) {
    console.log(!otp[idx], "handleKeyDown");

    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      ref.current[idx - 1].focus();
      console.log("delete");
    }
    if (e.key === "ArrowLeft" && idx > 0) ref.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < LENGTH - 1)
      ref.current[idx + 1]?.focus();
  }

  function handlePaste(e){
    e.preventDefault()
    console.log(e.clipboardData.getData('text').replace(/\D/g , '').slice(0 , LENGTH) , "event")
    const pasted = e.clipboardData.getData('text').replace(/\D/g , '').slice(0 , LENGTH)
    if (!pasted) return
    const next = Array(LENGTH).fill('')
    for(let i = 0 ; i < pasted.length; i++){
        next[i] = pasted[i]
    }
    setOtp(next)
    ref.current[Math.min(pasted.lenght , LENGTH -1)]?.focus()

  }

  const code = otp.join('')
  const complete = code.length === LENGTH

  return (
    <>
      <div
      onPaste={handlePaste}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {otp.map((val, i) => {
          return (
            <input
              key={i}
              ref={(r) => (ref.current[i] = r)}
              maxLength={1}
              onChange={(e) => handleInputChnage(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              value={val}
              inputMode="numeric"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                textAlign: "center",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          textAlign: "center",
          color: complete ? "var(--green)" : "var(--text-dim)",
          fontSize: 13,
        }}
      >
        {complete
          ? `✓ Code: ${code}`
          : `Enter ${LENGTH}-digit code (try pasting)`}
      </div>
    </>
  );
};

export default OTP2;

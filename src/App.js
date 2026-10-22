import "./App.css";
import MobileNumber from "./componenets/MobileNumber/mobileNumber";
import CustomCombobox from "./componenets/combobox/combobox";
import FormValidation from "./componenets/formValidation/formvalidation";
import OTP from "./componenets/otpInput/otp";
import OTP2 from "./componenets/otpInput/otpinput2";

function App() {
  return (
    <div className="App">
      <MobileNumber />
      <CustomCombobox/>
      <FormValidation/>
      <OTP/>
      <OTP2/>
    </div>
  );
}

export default App;

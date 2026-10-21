import logo from "./logo.svg";
import "./App.css";
import MobileNumber from "./componenets/MobileNumber/mobileNumber";
import CustomCombobox from "./componenets/combobox/combobox";
import FormValidation from "./componenets/formValidation/formvalidation";
import OTP from "./componenets/otpInput/otp";

function App() {
  return (
    <div className="App">
      <MobileNumber />
      <CustomCombobox/>
      <FormValidation/>
      <OTP/>
    </div>
  );
}

export default App;

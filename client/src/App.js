import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;

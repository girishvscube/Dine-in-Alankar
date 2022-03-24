import { Routes, Route } from "react-router-dom";
import { SideNavbar } from "./components/SideNavbar";

import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<SideNavbar />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;

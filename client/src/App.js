import { Routes, Route } from "react-router-dom";
import { Sidenavheader } from "./components/Sidenavheader";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Feedback } from "./Pages/Feedback/Feedback";
import ManageCategoryPage from "./components/ManageCategory/ManageCategoryPage/ManageCategoryPage";
import ManageMenuBody from "./components/ManageMenu/ManageMenuBody";
import { PastOrders } from "./Pages/PastOrders/PastOrders";
import { ManageTables } from "./components/ManageTables/ManageTables";
import { KDS } from "./Pages/KDS/KDS";
import AddMenuBody from "./components/ManageMenu/AddMenuBody";

//import { ManageTables } from "./components/ManageTables/ManageTables";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />

        <Route exact path="/menu" element={<Sidenavheader />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="dinein" element={<ActiveOrder />}>
            <Route exact path="activeorder" element={<ActiveOrder />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="pastorder" element={<PastOrders />} />
            <Route exact path="managetable" element={<ManageTables />} />
            <Route exact path="KDS" element={<KDS />} />
          </Route>
          <Route exact path="managemenu" element={<ManageMenuBody />} />
          <Route exact path="addmenu" element={<AddMenuBody />} />
          <Route exact path="managecategory" element={<ManageCategoryPage />} />
          <Route exact path="feedback" element={<Feedback />} />
          <Route exact path="reports" element={<Feedback />} />
          <Route exact path="partyorder" element={<Dashboard />} />
          <Route exact path="managestaff" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

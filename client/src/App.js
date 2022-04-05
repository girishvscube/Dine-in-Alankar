import { Routes, Route } from "react-router-dom";
import { Sidenavheader } from "./components/Sidenavheader";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { CreateNewOrder } from "./Pages/CreateNewOrder/CreateNewOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Feedback } from "./Pages/Feedback/Feedback";
import ManageMenuPage from "./components/ManageMenu/ManageMenuPage";
import ManageCategoryPage from "./components/ManageCategory/ManageCategoryPage/ManageCategoryPage";
import ManageMenuBody from "./components/ManageMenu/ManageMenuBody";
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
            <Route exact path="activeorder" element={<Dashboard />} />
            <Route exact path="createneworder" element={<CreateNewOrder />} />
            <Route exact path="managetable" element={<CreateNewOrder />} />
          </Route>

          <Route exact path="managemenu" element={<ManageMenuBody />} />
          <Route exact path="takeaway" element={<ManageMenuPage />} />
          <Route exact path="managecategory" element={<ManageCategoryPage />} />
          <Route exact path="feedback" element={<Feedback />} />
          <Route exact path="reports" element={<Feedback />} />
          <Route exact path="partyorder" element={<Dashboard />} />
          <Route exact path="managestaff" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* <ManageTables /> */}
    </>
  );
}

export default App;

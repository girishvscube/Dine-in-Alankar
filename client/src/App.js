import { Routes, Route } from "react-router-dom";
import { Sidenavheader } from "./components/Sidenavheader";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Feedback } from "./Pages/Feedback/Feedback";
import ManageMenuBody from "./Pages/ManageMenu/ManageMenuBody";
import ManageCategoryBody from './Pages/ManageCategory/ManageCategoryBody';
import ManageStaffBody from './Pages/ManageStaff/ManageStaffBody'
import { PastOrders } from "./Pages/PastOrders/PastOrders";
import { ManageTables } from "./components/ManageTables/ManageTables";
import { KDS } from "./Pages/KDS/KDS";
import AddMenuBody from "./components/ManageMenu/AddMenuBody";
import EditMenuBody from "./components/ManageMenu/EditMenuBody"
import AddNewCategoryBody from "./components/ManageCategory/AddNewCategory/AddNewCategoryBody"
import AddNewStaffBody from "./components/ManageStaff/AddNewStaff/AddNewStaffBody"
import EditStaffBody from './components/ManageStaff/EditStaff/EditStaffBody'
import RollBody from './components/ManageStaff/AddRole/RollBody'


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
          <Route exact path="managecategory" element={<ManageCategoryBody />} />
          <Route exact path="addmenu" element={<AddMenuBody />} />
          
          <Route exact path="feedback" element={<Feedback />} />
          <Route exact path="reports" element={<Feedback />} />
          <Route exact path="partyorder" element={<Dashboard />} />
          <Route exact path="managestaff" element={<ManageStaffBody/>} />

          <Route exact path="addmenu" element={<AddMenuBody/>} />
          <Route exact path="editmenu" element={<EditMenuBody/>} />
          <Route exact path="addnewcategory" element={<AddNewCategoryBody/>} />
          <Route exact path="addnewstaff" element={<AddNewStaffBody/>} />
          <Route exact path="editstaff" element={<EditStaffBody/>}></Route>
          <Route exact path="addrole" element={<RollBody/>}></Route>
          

        </Route>
      </Routes>
    </>
  );
}

export default App;

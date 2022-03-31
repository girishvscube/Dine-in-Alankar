import { Routes, Route } from "react-router-dom";
import { DetailOrder } from "./components/ActiveOrder/DetailOrder";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { CreateNewOrder } from "./Pages/CreateNewOrder/CreateNewOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import AddMenuPage from "./components/ManageMenu/AddMenuPage";
import EditMenuPage from "./components/ManageMenu/EditMenuPage";
import ManageMenuPage from "./components/ManageMenu/ManageMenuPage";
import AddNewStaffPage from "./components/ManageStaff/AddNewStaffPage";
import EditStaffPage from "./components/ManageStaff/EditStaffPage";
import ManageStaffPage, {
  MangeStaffPage,
} from "./components/ManageStaff/ManageStaffPage";
import ManageCategoryPage from "./components/ManageCategory/ManageCategoryPage/ManageCategoryPage";
import AddNewCategoryPage from "./components/ManageCategory/AddNewCategory/AddNewCategoryPage";
import { PastOrders } from "./Pages/PastOrders/PastOrders";
import { KDS } from "./Pages/KDS/KDS";
import { ViewKDS } from "./components/KDS/ViewKDS";
import { CreateKDS } from "./Pages/KDS/CreateKDS";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Dashboard />} /> */}
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/activeorder" element={<ActiveOrder />} />
        <Route exact path="/KDS" element={<KDS />} />
        <Route exact path="/viewKDS" element={<ViewKDS />} /> */}
      </Routes>
      <SideNavbar />
      {/* <CreateNewOrder /> */}
      {/* <PastOrders /> */}
      {/* <CreateKDS /> */}
      {/* <ManageStaffPage/> */}
      {/* <AddNewCategoryPage/> */}
       <CouponPage/> 
    </div>
  );
}

export default App;

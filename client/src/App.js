import { Routes, Route } from "react-router-dom";
import { Sidenavheader } from "./components/Sidenavheader";
// import { DetailOrder } from "./components/ActiveOrder/DetailOrder";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { CreateNewOrder } from "./Pages/CreateNewOrder/CreateNewOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Feedback } from "./Pages/Feedback/Feedback";

// import AddMenuPage from "./components/ManageMenu/AddMenuPage";
// import EditMenuPage from "./components/ManageMenu/EditMenuPage";
import ManageMenuPage from "./components/ManageMenu/ManageMenuPage";
// import EditStaffPage from "./components/ManageStaff/EditStaff/EditStaffPage";
import ManageCategoryPage from "./components/ManageCategory/ManageCategoryPage/ManageCategoryPage";
// import AddNewCategoryPage from "./components/ManageCategory/AddNewCategory/AddNewCategoryPage";
// import { PastOrders } from "./Pages/PastOrders/PastOrders";
// import { KDS } from "./Pages/KDS/KDS";
// import { ViewKDS } from "./components/KDS/ViewKDS";
// import { CreateKDS } from "./Pages/KDS/CreateKDS";
// import { SideNavbar } from "./components/SideNavbar/SideNavbar";
// import CouponPage from "./components/StoreSetting/CouponDiscount/CouponPage";
// import DiscountPage from "./components/StoreSetting/Discount/DiscountPage";
// import UserPage from "./components/StoreSetting/UserRole/UserPage";
// import TablePage from "./components/StoreSetting/Table/TablePage";
// import StorePage from "./components/StoreSetting/Store/StorePage";
// import AddNewStaffPage from "./components/ManageStaff/AddNewStaff/AddNewStaffPage";
// import ManageStaffPage from "./components/ManageStaff/Managestaff/ManageStaffPage";
// import RollPage from "./components/ManageStaff/AddRole/RollPage";
// import DetailPage from "./components/TakeAway/CustomerDetails/DetailPage";
// import ItemsPage from "./components/TakeAway/AddItems/ItemsPage";

function App() {
  return (
    <div>
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
          <Route exact path="managemenu" element={<ManageMenuPage />} />
          <Route exact path="takeaway" element={<ManageMenuPage />} />
          <Route exact path="managecategory" element={<ManageCategoryPage />} />
          <Route exact path="feedback" element={<Feedback />} />
          <Route exact path="reports" element={<Feedback />} />
          <Route exact path="partyorder" element={<Dashboard />} />
          <Route exact path="managestaff" element={<Dashboard />} />
        </Route>

        {/* <Route exact path="dashboard" element={<Dashboard />} /> */}
        {/* <Route exact path="/login" element={<Login />} /> 

        <Route exact path="/activeorder" element={<ActiveOrder />} />
        <Route exact path="/KDS" element={<KDS />} />
        <Route exact path="/viewKDS" element={<ViewKDS />} /> 
         <Route exact path="/storesetting" element={<StorePage/>}/>
        <Route exact path="/tablesetting" element={<TablePage/>}/>
        <Route exact path="/discountsetting" element={<DiscountPage/>}/>
        <Route exact path="/couponsetting" element={<CouponPage/>}/>
        <Route exact path="/usersetting" element={<UserPage/>}/> 
        <Route exact path="/addnewstaff" element={<AddNewStaffPage/>}/>
        <Route exact path="/newrole" element={<RollPage/>}/>
        <Route exact path="/editstaff" element={<EditStaffPage/>}/>
         <Route exact path="/addnewcategory" element={<AddNewCategoryPage/>}/>   */}
      </Routes>
      {/* <DetailOrder /> */}
      {/* <Sidenavheader /> */}
    </div>
  );
}

export default App;

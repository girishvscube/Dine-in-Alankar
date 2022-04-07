import { Routes, Route } from "react-router-dom";
import { Sidenavheader } from "./components/Sidenavheader";
import { ActiveOrder } from "./Pages/ActiveOrder/ActiveOrder";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Feedback } from "./Pages/Feedback/Feedback";
import ManageMenuBody from "./Pages/ManageMenu/ManageMenuBody";
import ManageCategoryBody from "./Pages/ManageCategory/ManageCategoryBody";
import ManageStaffBody from "./Pages/ManageStaff/ManageStaffBody";
import { PastOrders } from "./Pages/PastOrders/PastOrders";
import { ManageTables } from "./components/ManageTables/ManageTables";
import { KDS } from "./Pages/KDS/KDS";
import AddNewCategoryBody from "./components/ManageCategory/AddNewCategory/AddNewCategoryBody";
import CategoryBody from "./components/ManageCategory/EditCategory/CategoryBody";
import AddMenuBody from "./components/ManageMenu/AddMenuBody";
import EditMenuBody from "./components/ManageMenu/EditMenuBody";
import { CreateNewOrder } from "./Pages/CreateNewOrder/CreateNewOrder";
import ItemsBody from "./components/TakeAway/AddItems/ItemsBody";
import DetailBody from "./components/TakeAway/CustomerDetails/DetailBody";
import PaymentBody from "./components/TakeAway/ManagePayment/PaymentBody";
import ManageOrderBody from "./Pages/TakeAway/ManageOrderBody";
import SalesBody from "./components/Reports/SalesReport/SalesBody";
import AddNewStaffBody from "./components/ManageStaff/AddNewStaff/AddNewStaffBody";
import RollBody from "./components/ManageStaff/AddRole/RollBody";
import EditStaffBody from "./components/ManageStaff/EditStaff/EditStaffBody";

function App() {
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        {/* Parent Route Sidenavbar and Header */}

        <Route exact path="/menu" element={<Sidenavheader />}>
          {/* Dashboard */}
          <Route exact path="dashboard" element={<Dashboard />} />
          {/* Dine in Route */}
          <Route exact path="dinein" element={<ActiveOrder />} />
          <Route exact path="dinein/dashboard" element={<Dashboard />} />
          <Route exact path="dinein/activeorder" element={<ActiveOrder />} />
          <Route
            exact
            path="dinein/createneworder"
            element={<CreateNewOrder />}
          />
          <Route exact path="dinein/pastorder" element={<PastOrders />} />
          <Route exact path="dinein/managetable" element={<ManageTables />} />
          <Route exact path="dinein/KDS" element={<KDS />} />
          {/* Manage Menu Route */}
          <Route exact path="managemenu" element={<ManageMenuBody />} />
          <Route exact path="addmenu" element={<AddMenuBody />} />
          <Route exact path="editmenu" element={<EditMenuBody />} />

          {/*Managestaff Route */}
          <Route exact path="managestaff" element={<ManageStaffBody />} />
          <Route exact path="managestaff/addrole" element={<RollBody/>} />


          {/* ManageCategory Route */}
          <Route exact path="managecategory" element={<ManageCategoryBody />} />
          <Route exact path="addnewcategory" element={<AddNewCategoryBody />} />
          <Route exact path="editcategory" element={<CategoryBody />} />

          {/* Take away Route */}
          <Route exact path="takeaway" element={<ManageOrderBody />} />
          <Route exact path="takeaway/itemdetails" element={<ItemsBody />} />
          <Route
            exact
            path="takeaway/customerdetails"
            element={<DetailBody />}
          />
          <Route
            exact
            path="takeaway/managepayment"
            element={<PaymentBody />}
          />
          <Route exact path="takeaway/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="takeaway/manageorder"
            element={<ManageOrderBody />}
          />
          {/* Party Order Route*/}

          {/* Manage Staff Route */}
          <Route exact path="managestaff" element={<ManageStaffBody />} />
          <Route exact path="addnewstaff" element={<AddNewStaffBody />} />
          <Route exact path="newrole" element={<RollBody />} />
          <Route exact path="editstaff" element={<EditStaffBody />} />

          {/* FeedBack Route */}
          <Route exact path="feedback" element={<Feedback />} />

          {/* Reports Route*/}
          <Route exact path="reports" element={<SalesBody />} />

          <Route exact path="partyorder" element={<Dashboard />} />
          



          <Route exact path="setting/store" element={<StoreBody/>}/>
          <Route exact path="setting/table" element={<TableBody/>}/>
          <Route exact path="setting/discount" element={<DiscountBody/>}/>
          <Route exact path="setting/user" element={<UserBody/>}/>
          <Route exact path="setting/discount/createcoupon" element={<CouponBody/>}/>


        </Route>
      </Routes>
    </>
  );
}

export default App;

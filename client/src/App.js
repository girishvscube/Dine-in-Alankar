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
import { PartyOrders } from "./Pages/PartyOrders/PartyOrders";
//import { PrivateRoute } from "./Pages/Login/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />

        {/* Private Routing */}
        {/* <Route element={<PrivateRoute />}> */}
        {/* Parent Route Sidenavbar and Header */}
        <Route exact path="/menu" element={<Sidenavheader />}>
          {/* Dashboard */}
          <Route exact path="dashboard" element={<Dashboard />} />
          {/* Dine in Route */}
          <Route exact path="dinein" element={<ActiveOrder />} />
          <Route exact path="dinein/dashboard" element={<Dashboard />} />
          <Route exact path="dinein/active-order" element={<ActiveOrder />} />
          <Route
            exact
            path="dinein/create-new-order"
            element={<CreateNewOrder />}
          />
          <Route exact path="dinein/past-order" element={<PastOrders />} />
          <Route exact path="dinein/manage-table" element={<ManageTables />} />
          <Route exact path="dinein/KDS" element={<KDS />} />
          {/* Manage Menu Route */}
          <Route exact path="manage-menu" element={<ManageMenuBody />} />
          <Route exact path="add-menu" element={<AddMenuBody />} />
          <Route exact path="edit-menu" element={<EditMenuBody />} />
          {/* ManageCategory Route */}
          <Route
            exact
            path="manage-category"
            element={<ManageCategoryBody />}
          />
          <Route
            exact
            path="add-new-category"
            element={<AddNewCategoryBody />}
          />
          <Route exact path="edit-category" element={<CategoryBody />} />

          {/* Take away Route */}
          <Route exact path="take-away" element={<ManageOrderBody />} />
          <Route exact path="take-away/item-details" element={<ItemsBody />} />
          <Route
            exact
            path="take-away/customer-details"
            element={<DetailBody />}
          />
          <Route
            exact
            path="take-away/manage-payment"
            element={<PaymentBody />}
          />
          <Route exact path="takeaway/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="takeaway/manageorder"
            element={<ManageOrderBody />}
          />
          {/* Party Order Route*/}
          <Route exact path="partyorder" element={<PartyOrders />} />

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
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;

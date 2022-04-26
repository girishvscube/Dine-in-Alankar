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
import { SelectOptionAddItems } from "./components/CreateNewOrder/SelectOptionAddItems";
import { KDS } from "./Pages/KDS/KDS";
import { ViewKDS } from "./components/KDS/ViewKDS";
import { CreateKDS } from "./Pages/KDS/CreateKDS";
import AddNewCategoryBody from "./components/ManageCategory/AddNewCategory/AddNewCategoryBody";
import CategoryBody from "./components/ManageCategory/EditCategory/CategoryBody";
import AddMenuBody from "./components/ManageMenu/AddMenuBody";
import EditMenuBody from "./components/ManageMenu/EditMenuBody";
import { CreateNewOrder } from "./Pages/CreateNewOrder/CreateNewOrder";
import AddItems from "./components/TakeAway/AddItems";
import CustomerDetails from "./components/TakeAway/CustomerDetails";
import PaymentBody from "./components/TakeAway/PaymentBody";
import SalesBody from "./Pages/Reports/SalesBody";
import AddNewStaffBody from "./components/ManageStaff/AddNewStaff/AddNewStaffBody";
import RollBody from "./components/ManageStaff/AddRole/RollBody";
import EditStaffBody from "./components/ManageStaff/EditStaff/EditStaffBody";
import { PartyOrders } from "./Pages/PartyOrders/PartyOrders";
import { PrivateRoute } from "./Pages/Login/PrivateRoute";
import StoreBody from "./Pages/Settings/StoreBody";
import TableBody from "./components/StoreSetting/TableBody";
import DiscountBody from "./components/StoreSetting/DiscountBody";
import UserBody from "./components/StoreSetting/UserBody";
import CouponBody from "./components/StoreSetting/CouponBody";
import StaffBody from "./components/Reports/StaffReport/StaffBody";
import PartyBody from "./components/PartyOrder/PartyBody";
import PastOrderBody from "./components/PartyOrder/PastOrderBody";
import PSelectButtons from "./components/PartyOrder/PSelectButtons";
import Takeaway from "./Pages/TakeAway/Takeaway";

function App() {
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />

        {/* Private Routing */}
        <Route element={<PrivateRoute />}>
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
            <Route
              exact
              path="dinein/add-items"
              element={<SelectOptionAddItems />}
            />
            <Route exact path="dinein/past-order" element={<PastOrders />} />
            <Route
              exact
              path="dinein/manage-table"
              element={<ManageTables />}
            />
            <Route exact path="dinein/KDS" element={<KDS />} />
            <Route exact path="dinein/view-kds" element={<ViewKDS />} />
            <Route exact path="dinein/create-kds" element={<CreateKDS />} />

            {/* Manage Menu Route */}
            <Route exact path="manage-menu" element={<ManageMenuBody />} />
            <Route exact path="add-menu" element={<AddMenuBody />} />
            <Route exact path="edit-menu/:id" element={<EditMenuBody />} />
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
            <Route exact path="take-away" element={<Takeaway />} />
            <Route exact path="take-away/item-details" element={<AddItems />} />
            <Route
              exact
              path="take-away/customer-details"
              element={<CustomerDetails />}
            />
             <Route
              exact
              path="take-away/add-items"
              element={<AddItems />}
            />
             <Route
              exact
              path="take-away/manage-payment"
              element={<PaymentBody />}
            /> 
            <Route exact path="take-away/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="take-away/manage-order"
              element={<Takeaway />}
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
            <Route exact path="reports/staff-report" element={<StaffBody />} />
            <Route exact path="reports/sales-report" element={<SalesBody />} />

            {/*Party orders */}

            <Route exact path="party-order" element={<PartyBody />} />

            <Route
              exact
              path="party-order/active-order"
              element={<PartyBody />}
            />
            <Route
              exact
              path="party-order/customer"
              element={<PSelectButtons />}
            />

            <Route
              exact
              path="party-order/past-order"
              element={<PastOrderBody />}
            />

            <Route exact path="setting" element={<StoreBody />} />
            <Route exact path="setting/store" element={<StoreBody />} />
            <Route exact path="setting/table" element={<TableBody />} />
            <Route exact path="setting/discount" element={<DiscountBody />} />
            <Route exact path="setting/user-role" element={<UserBody />} />
            <Route
              exact
              path="setting/create-coupon"
              element={<CouponBody />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

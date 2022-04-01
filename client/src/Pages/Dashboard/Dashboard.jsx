import { AdminContainer } from "../../components/Dashboard/AdminContainer";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

export const Dashboard = () => {
  return (
    <div className="flex bg-darkwhite">
      <SideNavbar />
      <AdminContainer />
    </div>
  );
};

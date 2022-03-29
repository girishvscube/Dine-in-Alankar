import { SuperAdmin } from "../../components/ActiveOrder/SuperAdmin";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

export const ActiveOrder = () => {
  return (
    <div>
      <div className="flex Bg">
        <SideNavbar />
        <SuperAdmin />
      </div>
    </div>
  );
};

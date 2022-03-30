import { SuperAdminContainer } from "../../components/KDS/SuperAdminContainer";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

export const KDS = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <SuperAdminContainer />
    </div>
  );
};

import { CreateKDSContainer } from "../../components/KDS/CreateKDSContainer";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

export const CreateKDS = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <CreateKDSContainer />
    </div>
  );
};

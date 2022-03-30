import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import { SelectOption } from "../../components/CreateNewOrder/SelectOption";

export const CreateNewOrder = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <SelectOption />
    </div>
  );
};

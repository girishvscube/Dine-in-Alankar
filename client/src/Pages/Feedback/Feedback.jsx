import { FeedbackContainer } from "../../components/Feedback/FeedbackContainer";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

export const Feedback = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <FeedbackContainer />
    </div>
  );
};

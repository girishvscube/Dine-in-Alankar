import { Customers } from "./Customers";
import { FeedbackCard } from "./FeedbackCard";
import { FeedbackHeader } from "./FeedbackHeader";
import { SuperAdminContainer } from "./SuperAdminContainer";

export const FeedbackContainer = () => {
  return (
    <div className="w-screen bg-darkwhite">
      <SuperAdminContainer />
      <FeedbackHeader />
      <div className="flex justify-between m-11">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
      <Customers />
    </div>
  );
};

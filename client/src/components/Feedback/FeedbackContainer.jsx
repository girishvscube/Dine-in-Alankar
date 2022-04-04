import { Customers } from "./Customers";
import { FeedbackCard } from "./FeedbackCard";
import { FeedbackHeader } from "./FeedbackHeader";

export const FeedbackContainer = () => {
  return (
    <div className="h-[88vh] bg-darkwhite overflow-y-scroll">
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

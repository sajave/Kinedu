import {useState} from "react";
import "./MilestoneStateButton.css";

export function MilestoneStateButton() {
  const [milestoneCurrentState, setMilestoneCurrentState] =
    useState("Not Answered");
  const [milestoneCurrentStateStyle, setMilestoneCurrentStateStyle] = useState({
    milestoneStateButtonContainer: "milestoneStateButtonContainerNA",
    milestoneStateButton: "milestoneStateButtonNA",
  });

  function changeMilestoneState() {
    if (milestoneCurrentState === "Uncompleted") {
      setMilestoneCurrentState("Completed");
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateButtonContainer: "milestoneStateButtonContainerCompleted",
        milestoneStateButton: "milestoneStateButtonCompleted",
      });
      return;
    } else {
      setMilestoneCurrentState("Uncompleted");
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateButtonContainer:
          "milestoneStateButtonContainerUncompleted",
        milestoneStateButton: "milestoneStateButtonUncompleted",
      });
      return;
    }
  }
  return (
    <div>
      <h3 id={milestoneCurrentStateStyle.milestoneStateButtonContainer}>
        <button
          id={milestoneCurrentStateStyle.milestoneStateButton}
          onClick={() => changeMilestoneState()}
        >
          {milestoneCurrentState}
        </button>
      </h3>
    </div>
  );
}

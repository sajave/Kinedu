import {useState} from "react";
import "./MilestoneStateButton.css";

export function MilestoneStateButton() {
  const [milestoneCurrentState, setMilestoneCurrentState] =
    useState("Not Answered");

  function changeMilestoneState() {
    if (milestoneCurrentState === "Uncompleted") {
      setMilestoneCurrentState("Completed");
      return;
    } else {
      setMilestoneCurrentState("Uncompleted");
      return;
    }
  }
  return (
    <div>
      <h3 id='milestoneStateButtonContainer'>
        <button
          id='milestoneStateButton'
          onClick={() => changeMilestoneState()}
        >
          {milestoneCurrentState}
        </button>
      </h3>
    </div>
  );
}

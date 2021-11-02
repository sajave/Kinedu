import {useState} from "react";
import {useDispatch} from "react-redux";
import {milestoneState} from "../../store-redux/actions";
import "./MilestoneStateButton.css";

type Props = {
  id: number;
  answer: string | null;
};

export function MilestoneStateButton({id, answer}: Props) {
  const [milestoneCurrentStateStyle, setMilestoneCurrentStateStyle] = useState({
    milestoneStateButtonContainer: "milestoneStateButtonContainerNA",
    milestoneStateButton: "milestoneStateButtonNA",
  });
  const dispatch = useDispatch();

  const updateMilestoneState = () => {
    if (answer === "yes") {
      dispatch(milestoneState(id, "no"));
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateButtonContainer:
          "milestoneStateButtonContainerUncompleted",
        milestoneStateButton: "milestoneStateButtonUncompleted",
      });
    } else {
      dispatch(milestoneState(id, "yes"));
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateButtonContainer: "milestoneStateButtonContainerCompleted",
        milestoneStateButton: "milestoneStateButtonCompleted",
      });
    }
    return;
  };

  return (
    <div>
      <h3
        className={
          answer === "yes"
            ? "milestoneStateButtonContainerCompleted"
            : answer === "no"
            ? "milestoneStateButtonContainerUncompleted"
            : answer === null
            ? "milestoneStateButtonContainerNA"
            : ""
        }
      >
        <button
          className={
            answer === "yes"
              ? "milestoneStateButtonCompleted"
              : answer === "no"
              ? "milestoneStateButtonUncompleted"
              : answer === null
              ? "milestoneStateButtonNA"
              : ""
          }
          onClick={() => {
            updateMilestoneState();
          }}
        >
          {answer === null
            ? "Not Answered"
            : answer === "no"
            ? "Uncompleted"
            : "Completed"}
        </button>
      </h3>
    </div>
  );
}

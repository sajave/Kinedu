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
    milestoneStateBtnContainer: "milestoneStateBtnContainerNA",
    milestoneStateBtn: "milestoneStateBtnNA",
  });
  const dispatch = useDispatch();

  const updateMilestoneState = () => {
    if (answer === "yes") {
      dispatch(milestoneState(id, "no"));
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateBtnContainer: "milestoneStateBtnContainerUncompleted",
        milestoneStateBtn: "milestoneStateBtnUncompleted",
      });
    } else {
      dispatch(milestoneState(id, "yes"));
      setMilestoneCurrentStateStyle({
        ...milestoneCurrentStateStyle,
        milestoneStateBtnContainer: "milestoneStateBtnContainerCompleted",
        milestoneStateBtn: "milestoneStateBtnCompleted",
      });
    }
    return;
  };

  return (
    <div>
      <h3
        className={
          answer === "yes"
            ? "milestoneStateBtnContainerCompleted"
            : answer === "no"
            ? "milestoneStateBtnContainerUncompleted"
            : answer === null
            ? "milestoneStateBtnContainerNA"
            : ""
        }
      >
        <button
          className={
            answer === "yes"
              ? "milestoneStateBtnCompleted"
              : answer === "no"
              ? "milestoneStateBtnUncompleted"
              : answer === null
              ? "milestoneStateBtnNA"
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

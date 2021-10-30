import {milestone} from "../../constants/types";
import {MilestoneStateButton} from "../milestoneStateButton/MilestoneStateButton";
import "./MilestoneCard.css";

export function MilestoneCard(milestone: milestone) {
  return (
    <div className='milestoneCardContainer'>
      <div id='textAndButtonContainer'>
        <div id='milestoneTitleAndDescription'>
          <h4 id='titleMilestone'>{milestone.title}</h4>
          <h5>
            <div id='descriptionMilestone'>{milestone.description}</div>
          </h5>
        </div>
        <MilestoneStateButton />
      </div>
      <hr id='hrDivisorCard'></hr>
    </div>
  );
}

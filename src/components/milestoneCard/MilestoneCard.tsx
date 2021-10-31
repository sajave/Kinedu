import {MilestoneCardProps} from "../../constants/types";
import {MilestoneStateButton} from "../milestoneStateButton/MilestoneStateButton";
import "./MilestoneCard.css";

export function MilestoneCard({
  ageRange,
  id,
  age,
  skill_id,
  master,
  area_id,
  title,
  description,
  science_fact,
  source_data,
  parent_skill_id,
  media_jpg,
  media_mp4,
  answer,
}: MilestoneCardProps) {
  return (
    <div className='milestoneCardContainer'>
      <div id='textAndButtonContainer'>
        <div id='milestoneTitleAndDescription'>
          <h4 id='titleMilestone'>{title}</h4>
          <h5 id='ageRangeMilestone'>Usually achieved by: {ageRange}</h5>
        </div>
        <MilestoneStateButton />
      </div>
      <hr id='hrDivisorCard'></hr>
    </div>
  );
}

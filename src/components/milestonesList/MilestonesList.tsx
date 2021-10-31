import {milestone} from "../../constants/types";
import {MilestoneCard} from "../milestoneCard/MilestoneCard";
import "./MilestonesList.css";

type Props = {
  milestones: milestone[];
  ageRange: string;
};

export function MilestoneListComponent({milestones, ageRange}: Props) {
  return (
    <div className='listOfMilestones'>
      {milestones.map((e) => {
        return (
          <div key={e.id}>
            <MilestoneCard
              ageRange={ageRange}
              id={e.id}
              age={e.age}
              skill_id={e.skill_id}
              master={e.master}
              area_id={e.area_id}
              title={e.title}
              description={e.description}
              science_fact={e.science_fact}
              source_data={e.source_data}
              parent_skill_id={e.parent_skill_id}
              media_jpg={e.media_jpg}
              media_mp4={e.media_mp4}
              answer={e.answer}
            />
          </div>
        );
      })}
    </div>
  );
}

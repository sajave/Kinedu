import {useSelector} from "react-redux";
import {DotLoader} from "react-spinners";
import {milestone, rootState} from "../../constants/types";
import {MilestoneCard} from "../milestoneCard/MilestoneCard";
import "./MilestonesList.css";

type Props = {
  milestones: milestone[] | undefined;
  ageRange: string | undefined;
};

export function MilestoneListComponent({milestones, ageRange}: Props) {
  const dataPhysical = useSelector((state: rootState) => state.physical);

  return (
    <div className='listOfMilestones'>
      {dataPhysical ? (
        milestones?.map((milestone) => {
          return (
            <div key={milestone.id}>
              <MilestoneCard
                ageRange={ageRange}
                id={milestone.id}
                age={milestone.age}
                skill_id={milestone.skill_id}
                master={milestone.master}
                area_id={milestone.area_id}
                title={milestone.title}
                description={milestone.description}
                science_fact={milestone.science_fact}
                source_data={milestone.source_data}
                parent_skill_id={milestone.parent_skill_id}
                media_jpg={milestone.media_jpg}
                media_mp4={milestone.media_mp4}
                answer={milestone.answer}
              />
            </div>
          );
        })
      ) : (
        <div className='loadingContainer'>
          <DotLoader color={"#1FADDF"} loading={true} />
        </div>
      )}
    </div>
  );
}

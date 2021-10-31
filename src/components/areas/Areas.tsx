import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getDataPhysycal,
  getSocialAndEmotional,
} from "../../store-redux/actions/index";
import {rootState, Skill} from "../../constants/types";
import {MilestoneListComponent} from "../milestonesList/MilestonesList";
import "./Areas.css";

export function Areas() {
  const dataPhysical = useSelector((state: rootState) => state.physical);
  const dataSocialAndEmotional = useSelector(
    (state: rootState) => state.socialAndEmotional
  );
  const dispatch = useDispatch();
  const [selectedArea, setSelectedArea] = useState<Skill | undefined>();

  function getDataFromApi() {
    dispatch(getDataPhysycal());
    dispatch(getSocialAndEmotional());
    return;
  }

  function setProps(e: any) {
    if (e.target.id === "buttonPhysical") {
      setSelectedArea(dataPhysical);
      return;
    }
    if (e.target.id === "buttonSocialAndEmotional") {
      setSelectedArea(dataSocialAndEmotional);
      return;
    }
  }

  return (
    <div>
      <div className='containerAreas'>
        <h1>
          <div id='areaSectionTitle'>Areas</div>
        </h1>
        <div className='areaButtonsGroup'>
          <div id='buttonContainerPhysycal'>
            <button id='buttonPhysical' onClick={(e) => setProps(e)}>
              Physical
            </button>
          </div>
          <div id='buttonContainerSocialAndEmotional'>
            <button id='buttonSocialAndEmotional' onClick={(e) => setProps(e)}>
              Social & emotional
            </button>
          </div>
        </div>
        <hr id='hrDivisor'></hr>
        <h1>
          <div className='skillAreaTitle'>Skill: {selectedArea?.title}</div>
          <h4>
            <div className='descriptionContainer'>
              {selectedArea?.description}
            </div>
          </h4>
        </h1>
      </div>
      <button onClick={() => getDataFromApi()}>get data</button>
      <div className='milestonesListContainer'>
        <MilestoneListComponent
          milestones={selectedArea?.milestones ? selectedArea.milestones : []}
          ageRange={selectedArea?.age_range ? selectedArea.age_range : ""}
        />
      </div>
      <div id='areaStateAllButtonContainer'>
        {selectedArea === dataPhysical ? (
          <h3 id='areaStateButtonContainer'>
            <button
              id='areaStateButton'
              onClick={() => setSelectedArea(dataSocialAndEmotional)}
            >
              Next
            </button>
          </h3>
        ) : (
          <h3 id='areaStateButtonContainer'>
            <button id='areaStateButton'>Finish assessment</button>
          </h3>
        )}
      </div>
    </div>
  );
}

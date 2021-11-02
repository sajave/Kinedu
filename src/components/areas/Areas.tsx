import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getDataPhysical,
  getSocialAndEmotional,
} from "../../store-redux/actions/index";
import {rootState, SelectedAreaStyle, Skill} from "../../constants/types";
import {MilestoneListComponent} from "../milestonesList/MilestonesList";
import "./Areas.css";

export function Areas() {
  const dataPhysical = useSelector((state: rootState) => state.physical);
  const dataSocialAndEmotional = useSelector(
    (state: rootState) => state.socialAndEmotional
  );
  const dispatch = useDispatch();
  const [selectedArea, setSelectedArea] = useState<Skill | undefined | null>();
  const [selectedAreaStyle, setSelectedAreaStyle] = useState<SelectedAreaStyle>(
    {
      containerAreas: "containerAreasPhysical",

      btnContainerPhysical: "btnContainerPhysicalSelected",
      btnContainerSAndE: "btnContainerSAndEUnselected",

      btnPhysical: "btnPhysicalSelected",
      btnSAndE: "btnSAndEUnselected",
    }
  );

  useEffect(() => {
    if (dataPhysical === null) {
      dispatch(getDataPhysical());
      dispatch(getSocialAndEmotional());
    }
  }, [dataPhysical, dispatch]);

  useEffect(() => {
    if (!selectedArea && dataPhysical) {
      setSelectedArea(dataPhysical);
      return;
    }
    if (selectedArea?.id === 23) {
      setSelectedArea(dataPhysical);
      return;
    }
    if (selectedArea?.id === 2) {
      setSelectedArea(dataSocialAndEmotional);
      return;
    }
  }, [dataPhysical, dataSocialAndEmotional, selectedArea]);

  const setProps = (e: any) => {
    if (
      e.target.id === "btnPhysicalSelected" ||
      e.target.id === "btnPhysicalUnselected" ||
      e.target.id === "getDataButton"
    ) {
      setSelectedArea(dataPhysical);
      return;
    }
    if (
      e.target.id === "btnSAndEUnselected" ||
      e.target.id === "areaStateBtn"
    ) {
      setSelectedArea(dataSocialAndEmotional);
      return;
    }
  };

  const setStyles = (e: any) => {
    if (
      e.target.id === "btnPhysicalSelected" ||
      e.target.id === "btnPhysicalUnselected"
    ) {
      setSelectedAreaStyle({
        ...selectedAreaStyle,
        containerAreas: "containerAreasPhysical",

        btnContainerPhysical: "btnContainerPhysicalSelected",
        btnContainerSAndE: "btnContainerSAndEUnselected",

        btnPhysical: "btnPhysicalSelected",
        btnSAndE: "btnSAndEUnselected",
      });
    }
    if (
      e.target.id === "btnSAndEUnselected" ||
      e.target.id === "areaStateBtn"
    ) {
      setSelectedAreaStyle({
        ...selectedAreaStyle,
        containerAreas: "containerAreasSAndE",

        btnContainerPhysical: "btnContainerPhysicalUnselected",
        btnContainerSAndE: "btnContainerSAndESelected",

        btnPhysical: "btnPhysicalUnselected",
        btnSAndE: "btnSAndESelected",
      });
      return;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className={selectedAreaStyle.containerAreas}>
        <h1>
          <div className='areaSectionTitle'>Areas</div>
        </h1>
        <div className='areaBtnsGroup'>
          <div id={selectedAreaStyle.btnContainerPhysical}>
            <button
              id={selectedAreaStyle.btnPhysical}
              onClick={(e) => {
                setProps(e);
                setStyles(e);
                return;
              }}
            >
              Physical
            </button>
          </div>
          <div id={selectedAreaStyle.btnContainerSAndE}>
            <button
              id={selectedAreaStyle.btnSAndE}
              onClick={(e) => {
                setProps(e);
                setStyles(e);
                return;
              }}
            >
              Social & emotional
            </button>
          </div>
        </div>
        <hr className='hrDivisor'></hr>
        <h1>
          <div className='skillAreaTitle'>Skill: {selectedArea?.title}</div>
          <h4>
            <div className='descriptionContainer'>
              {selectedArea?.description}
            </div>
          </h4>
        </h1>
      </div>
      <div className='milestonesListContainer'>
        <MilestoneListComponent
          milestones={selectedArea?.milestones}
          ageRange={selectedArea?.age_range}
        />
      </div>
      <div className='areaStateAllBtnContainer'>
        {!selectedArea ? null : selectedArea === dataPhysical ? (
          <h3 className='areaStateBtnContainer'>
            <button
              className='areaStateBtn'
              onClick={(e) => {
                setProps(e);
                setStyles(e);
                scrollToTop();
                return;
              }}
            >
              Next
            </button>
          </h3>
        ) : (
          <h3 className='areaStateBtnContainer'>
            <button className='areaStateBtn'>Finish assessment</button>
          </h3>
        )}
      </div>
    </div>
  );
}

import {GET_PHYSICAL, GET_SOCIAL_AND_EMOTIONAL} from "../actions/index";
import {action, rootState} from "../../constants/types";

const initialState: rootState = {
  physical: {
    age_range: "",
    area_id: 0,
    children: false,
    description: "",
    id: 0,
    logo_mobile: "",
    logo_web: "",
    milestones: [
      {
        id: 0,
        age: 0,
        skill_id: 0,
        master: false,
        area_id: 0,
        title: "",
        description: "",
        science_fact: "",
        source_data: "",
        parent_skill_id: null,
        media_jpg: "",
        media_mp4: "",
        answer: null,
      },
    ],
    parent_skill_id: null,
    percentil_availability: false,
    title: "",
  },
  socialAndEmotional: {
    age_range: "",
    area_id: 0,
    children: false,
    description: "",
    id: 0,
    logo_mobile: "",
    logo_web: "",
    milestones: [
      {
        id: 0,
        age: 0,
        skill_id: 0,
        master: false,
        area_id: 0,
        title: "",
        description: "",
        science_fact: "",
        source_data: "",
        parent_skill_id: null,
        media_jpg: "",
        media_mp4: "",
        answer: null,
      },
    ],
    parent_skill_id: null,
    percentil_availability: false,
    title: "",
  },
};

export default function rootReducer(state = initialState, action: action) {
  switch (action.type) {
    case GET_PHYSICAL:
      return {
        ...state,
        physical: action.payload.data.skill,
      };
    case GET_SOCIAL_AND_EMOTIONAL:
      return {
        ...state,
        socialAndEmotional: action.payload.data.skill,
      };
    default:
      return {...state};
  }
}

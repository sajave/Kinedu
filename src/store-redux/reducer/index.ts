import {
  GET_PHYSICAL,
  GET_SOCIAL_AND_EMOTIONAL,
  MILESTONE_STATE,
} from "../actions/index";
import {action, rootState} from "../../constants/types";

const initialState: rootState = {
  physical: null,
  socialAndEmotional: null,
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
    case MILESTONE_STATE:
      return {
        ...state,
        physical: {
          ...state.physical,
          milestones: state.physical?.milestones?.map((e) => {
            if (e.id === action.payload.id) {
              return {...e, answer: action.payload.currentState};
            } else {
              return e;
            }
          }),
        },
        socialAndEmotional: {
          ...state.socialAndEmotional,
          milestones: state.socialAndEmotional?.milestones?.map((e) => {
            if (e.id === action.payload.id) {
              return {...e, answer: action.payload.currentState};
            } else {
              return e;
            }
          }),
        },
      };
    default:
      return {...state};
  }
}

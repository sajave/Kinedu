import {GET_ALL_DATA} from "../actions/index";
import {action, rootState} from "../../constants/types";

const initialState: rootState = {
  data: {},
};

export default function rootReducer(state = initialState, action: action) {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {...state};
  }
}

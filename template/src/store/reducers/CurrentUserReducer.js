import { currentUserActionTypes } from "../../utils";

const INITIAL_STATE = null;

export const currentUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currentUserActionTypes.SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};

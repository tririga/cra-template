import { messageActionTypes } from "../../utils";

const INITIAL_STATE = null;

export const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case messageActionTypes.SET_MESSAGE:
      return action.message;
    case messageActionTypes.CLEAR_MESSAGE:
      return null;
    default:
      return state;
  }
};

const messageSelector = (state) => state.message;

export const MessageSelectors = {
  messageSelector,
};

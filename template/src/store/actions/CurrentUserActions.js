import { LoadingActions } from "..";
import { CurrentUserDS } from "../../model";
import { currentUserActionTypes } from "../../utils";

const setCurrentUser = (currentUser) => {
  return {
    type: currentUserActionTypes.SET_CURRENT_USER,
    currentUser,
  };
};

export const getCurrentUser = () => {
  return async (dispatch, getState) => {
    let { currentUser } = getState();
    if (currentUser != null) return currentUser;
    try {
      dispatch(LoadingActions.setLoading("currentUser", true));
      currentUser = await CurrentUserDS.getCurrentUser();
      dispatch(setCurrentUser(currentUser));
    } finally {
      dispatch(LoadingActions.setLoading("currentUser", false));
    }
    return currentUser;
  };
};

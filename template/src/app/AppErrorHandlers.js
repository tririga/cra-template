import { getAppStore, MessageActions } from "../store";

export function handleModelErrors(modelError, dispatch = true) {
  console.error(modelError);
  const { responseError, responseStatus } = modelError;
  let action;
  if (
    responseStatus === 403 &&
    responseError &&
    responseError.errorType === "SecurityException"
  ) {
    action = MessageActions.showSecurityError();
  } else if (responseStatus === 401) {
    action = MessageActions.showSessionExpiredError();
  } else {
    action = MessageActions.showGeneralError();
  }
  if (dispatch) {
    getAppStore().dispatch(action);
  } else {
    return action;
  }
}

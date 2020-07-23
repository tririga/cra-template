import { messageActionTypes, AppMsg } from "../../utils";

function setMessage({
  kind,
  title,
  subtitle1 = "",
  subtitle2 = "",
  caption = "",
  hideCloseButton = false,
}) {
  return {
    type: messageActionTypes.SET_MESSAGE,
    message: {
      kind,
      title,
      subtitle1,
      subtitle2,
      caption,
      hideCloseButton,
    },
  };
}

export function clearMessage() {
  return {
    type: messageActionTypes.CLEAR_MESSAGE,
  };
}

export function showSessionExpiredError() {
  return setMessage({
    kind: "session_expired",
  });
}

export function showSecurityError() {
  return setMessage({
    kind: "error",
    title: AppMsg.getMessage(AppMsg.ERRORS.SECURITY_ERROR_TITLE),
    subtitle1: AppMsg.getMessage(AppMsg.ERRORS.SECURITY_ERROR_DESCRIPTION),
    subtitle2: AppMsg.getMessage(AppMsg.ERRORS.SECURITY_ERROR_ACTION),
  });
}

export function showGeneralError() {
  return setMessage({
    kind: "error",
    title: AppMsg.getMessage(AppMsg.ERRORS.GENERAL_ERROR_TITLE),
    subtitle1: AppMsg.getMessage(AppMsg.ERRORS.GENERAL_ERROR_DESCRIPTION),
  });
}

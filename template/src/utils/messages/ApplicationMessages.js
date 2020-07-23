/* IBM Confidential‌ - OCO Source Materials‌ - (C) COPYRIGHT IBM CORP. 2020 - The source code for this program is not published or otherwise‌ divested of its trade secrets, irrespective of what has been‌ deposited with the U.S. Copyright Office. */

import messages from "./messages.json";
import errorMessages from "./errorMessages.json";
import buttonsMessages from "./buttonsMessages.json";

const rootMessages = {
  ...messages,
  ...errorMessages,
  ...buttonsMessages,
};

export const BUTTONS = {
  HOME: "HOME",
  CURRENT_USER: "CURRENT_USER",
  REFRESH: "REFRESH",
};

export const ERRORS = {
  SESSION_EXPIRED_ERROR_TITLE: "SESSION_EXPIRED_ERROR_TITLE",
  SESSION_EXPIRED_ERROR_DESCRIPTION: "SESSION_EXPIRED_ERROR_DESCRIPTION",
  SECURITY_ERROR_TITLE: "SECURITY_ERROR_TITLE",
  SECURITY_ERROR_DESCRIPTION: "SECURITY_ERROR_DESCRIPTION",
  SECURITY_ERROR_ACTION: "SECURITY_ERROR_ACTION",
  GENERAL_ERROR_TITLE: "GENERAL_ERROR_TITLE",
  GENERAL_ERROR_DESCRIPTION: "GENERAL_ERROR_DESCRIPTION",
};

export const MESSAGES = {
  HOME_HEADER: "HOME_HEADER",
  CURRENT_HEADER: "CURRENT_HEADER",
};

export function getMessage(label) {
  return rootMessages[label];
}

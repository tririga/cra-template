import { createBrowserHistory } from "history";
import { getTriAppConfig } from "@tririga/tririga-react-components";

let appHistory = null;

export function getAppHistory() {
  if (appHistory == null) {
    appHistory = createBrowserHistory({
      basename: getTriAppConfig().appPath,
    });
  }
  return appHistory;
}

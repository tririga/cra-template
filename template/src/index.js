import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import {
  standardTririgaLogin,
  fetchTriAppConfig,
  getAuthCheckerForCurrentApp,
} from "@tririga/tririga-react-components";
import { TririgaUXNextApp, AppErrorHandlers } from "./app";
import { getAppHistory } from "./utils";
import { createAppModel } from "./model";
import { getAppStore } from "./store";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

async function initApp() {
  await fetchTriAppConfig();
  const currentUser = await standardTririgaLogin();
  if (currentUser != null) {
    const authChecker = await getAuthCheckerForCurrentApp();
    if (authChecker.hasMinimumAppPermission()) {
      createAppModel(AppErrorHandlers.handleModelErrors);
      renderApp(currentUser);
    } else {
      // Todo
    }
  }
}

async function renderApp(currentUser) {
  const appHistory = getAppHistory();
  const appStore = getAppStore();
  const rootElement = document.getElementById("root");
  rootElement.dir = currentUser.userDirection;
  ReactDOM.render(
    <Provider store={appStore}>
      <ConnectedRouter history={appHistory}>
        <TririgaUXNextApp />
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
  serviceWorker.register();
}

initApp();

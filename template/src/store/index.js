/* IBM Confidential‌ - OCO Source Materials‌ - (C) COPYRIGHT IBM CORP. 2020 - The source code for this program is not published or otherwise‌ divested of its trade secrets, irrespective of what has been‌ deposited with the U.S. Copyright Office. */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { getAppHistory } from "../utils";
// Import Actions
import * as CurrentUserActions from "./actions/CurrentUserActions";
import * as LoadingActions from "./actions/LoadingActions";
import * as MessageActions from "./actions/MessageActions";
// Import Reducers
import { currentUserReducer } from "./reducers/CurrentUserReducer.js";
import { loadingReducer, LoadingSelectors } from "./reducers/LoadingReducer.js";
import { messageReducer, MessageSelectors } from "./reducers/MessageReducer.js";
// Import Epics
import * as CurrentUserEpics from "./epics/CurrentUserEpics";

let appStore = null;

function getAppStore() {
  if (appStore != null) {
    return appStore;
  }
  const appHistory = getAppHistory();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware();

  const rootReducer = combineReducers({
    loading: loadingReducer,
    currentUser: currentUserReducer,
    message: messageReducer,
    router: connectRouter(appHistory),
  });

  const rootEpic = combineEpics(...Object.values(CurrentUserEpics));

  appStore = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(routerMiddleware(appHistory), thunk, epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return appStore;
}

export {
  getAppStore,
  CurrentUserActions,
  LoadingActions,
  LoadingSelectors,
  MessageActions,
  MessageSelectors,
};

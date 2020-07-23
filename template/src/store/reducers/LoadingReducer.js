import { loadingActionTypes, computeLoading } from "../../utils";

const INITIAL_STATE = {
  main: false,
};

const loadingMap = new Map();

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loadingActionTypes.SET_LOADING:
      loadingMap.set(action.key, action.loading);
      return {
        ...state,
        main: computeLoading(loadingMap),
      };

    default:
      return state;
  }
};

const mainLoadingSelector = (state) => state.loading.main;

export const LoadingSelectors = {
  mainLoadingSelector,
};

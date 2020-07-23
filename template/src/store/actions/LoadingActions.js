import { loadingActionTypes } from "../../utils";

export const setLoading = (key, loading) => {
  return {
    type: loadingActionTypes.SET_LOADING,
    key,
    loading,
  };
};

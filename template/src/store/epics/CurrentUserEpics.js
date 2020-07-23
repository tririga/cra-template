import { LOCATION_CHANGE } from "connected-react-router";
import { ofType } from "redux-observable";
import { map, filter } from "rxjs/operators";
import { CurrentUserActions } from "..";
import { Routes } from "../../utils";

export function getCurrentUserEpic(action$, state$) {
  return action$.pipe(
    ofType(LOCATION_CHANGE),
    filter(() => state$.value.router.location.pathname === Routes.CURRENT_USER),
    map(() => CurrentUserActions.getCurrentUser())
  );
}

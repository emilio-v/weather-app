import { AlertType } from "../types";

export enum Action {
  ADD_LOCATION = "ADD_LOCATION",
  FIND_MY_LOCATION = "FIND_MY_LOCATION",
  ADD_ALERT = "ADD_ALERT",
  DELETE_ALERT = "DELETE_ALERT",
}

export type Actions =
  | { type: Action.ADD_LOCATION; payload: { location: string } }
  | { type: Action.FIND_MY_LOCATION }
  | { type: Action.ADD_ALERT; payload: { alert: AlertType } }
  | { type: Action.DELETE_ALERT; payload: { id: string } };

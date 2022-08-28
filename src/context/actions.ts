export enum Action {
  ADD_LOCATION = "ADD_LOCATION",
  FIND_MY_LOCATION = "FIND_MY_LOCATION",
}

export type Actions =
  | { type: Action.ADD_LOCATION; payload: { location: string } }
  | { type: Action.FIND_MY_LOCATION };

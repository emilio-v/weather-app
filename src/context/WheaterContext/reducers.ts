import { WeatherType } from "./context";

export enum Action {
  ADD_LOCATION = "ADD_LOCATION",
  FIND_MY_LOCATION = "FIND_MY_LOCATION",
}

export type Actions =
  | { type: Action.ADD_LOCATION; payload: { location: string } }
  | { type: Action.FIND_MY_LOCATION };

export const weatherReducer = (
  state: WeatherType,
  action: Actions
): WeatherType => {
  switch (action.type) {
    case Action.ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload.location],
      };
    default:
      return state;
  }
};

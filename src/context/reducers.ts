import { WeatherType } from "../types";
import { Action, Actions } from "./actions";

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

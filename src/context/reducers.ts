import { WeatherType, AlertType } from "../types";
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

export const alertReducer = (
  state: AlertType[],
  action: Actions
): Array<AlertType> => {
  switch (action.type) {
    case Action.ADD_ALERT:
      return [...state, action.payload.alert];
    case Action.DELETE_ALERT:
      return state.filter((alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};

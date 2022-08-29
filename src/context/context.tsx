import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { weatherReducer, alertReducer } from "./reducers";
import { Actions } from "./actions";

import { InitialStateType } from "../types";

export const intialState: InitialStateType = {
  weather: {
    locations: [],
    myLocation: null,
  },
  alerts: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Actions>;
}>({
  state: intialState,
  dispatch: () => null,
});

const mainReducer = (
  { weather, alerts }: InitialStateType,
  action: Actions
) => ({
  weather: weatherReducer(weather, action),
  alerts: alertReducer(alerts, action),
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

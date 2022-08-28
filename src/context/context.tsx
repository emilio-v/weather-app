import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { weatherReducer } from "./reducers";
import { Actions } from "./actions";

import { InitialStateType } from "../types";

export const intialState: InitialStateType = {
  weather: {
    locations: [],
    myLocation: null,
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Actions>;
}>({
  state: intialState,
  dispatch: () => null,
});

const mainReducer = ({ weather }: InitialStateType, action: Actions) => ({
  weather: weatherReducer(weather, action),
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

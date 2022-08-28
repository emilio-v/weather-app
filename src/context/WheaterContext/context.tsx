import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { weatherReducer, Actions } from "./reducers";

export type WeatherType = {
  myLocation: string | undefined | null;
  locations: string[];
};

export type InitialStateType = {
  weather: WeatherType;
};

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

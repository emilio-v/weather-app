export type InitialStateType = {
  weather: WeatherType;
};

export type WeatherType = {
  myLocation: string | undefined | null;
  locations: string[];
};

export type MyLocationType = {
  loading: boolean;
  country: string | undefined | null;
  state: string | undefined | null;
  city: string | undefined | null;
};

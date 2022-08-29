export type InitialStateType = {
  weather: WeatherType;
  alerts: AlertType[];
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

export type AlertType = {
  id: string;
  message: string;
};

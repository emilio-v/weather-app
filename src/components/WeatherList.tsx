import { useContext, useMemo } from "react";
import { AppContext } from "../context/context";
import WeatherItem from "./WeatherItem";
const WeatherList = () => {
  const { state } = useContext(AppContext);

  const items = useMemo(
    () =>
      state.weather.locations.map((location, idx) => (
        <WeatherItem key={`${idx}-${location}`} location={location} />
      )),
    [state.weather.locations]
  );

  if (!items.length) {
    return null;
  }

  return <div className="py-10">{items}</div>;
};

export default WeatherList;

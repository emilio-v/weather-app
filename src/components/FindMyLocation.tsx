import { useContext } from "react";
import axios from "axios";

import { AppContext } from "../context/context";
import { LocationIcon } from "../assets/icons";
import { Action } from "../context/actions";

// #d62828
// #0e79b2

const FindMyLocation = () => {
  const { dispatch } = useContext(AppContext);

  const findMyState = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        axios.get(geoApiUrl).then(({ data }) => console.log(data));
      },
      (error) =>
        dispatch({
          type: Action.ADD_ALERT,
          payload: {
            alert: {
              id: Math.random().toString(),
              message: error.message,
            },
          },
        })
    );
  };

  return (
    <div>
      <button onClick={findMyState}>
        <LocationIcon color="#d62828" />
      </button>
    </div>
  );
};

export default FindMyLocation;

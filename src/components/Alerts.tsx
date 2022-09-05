import { useContext, useMemo } from "react";
import { AppContext } from "../context/context";
import BannerAlert from "./BannerAlert";

const Alerts = () => {
  const { state } = useContext(AppContext);

  const alerts = useMemo(
    () =>
      state.alerts.map((alert) => (
        <div
          key={alert.id}
          className={state.alerts.length > 1 ? "mb-3.5" : "mb-0"}
        >
          <BannerAlert {...alert} />
        </div>
      )),
    [state.alerts]
  );

  if (alerts.length <= 0) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 mx-auto w-full px-5 py-5">
      {alerts}
    </div>
  );
};

export default Alerts;

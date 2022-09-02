import { useContext } from "react";
import { AppContext } from "../context/context";
import { deleteAlert } from "../context/actions";
import { CloseIcon, NotificationIcon } from "../assets/icons";

interface BannerAlertProps {
  id: string;
  message?: string;
}

const defaultMessage = "An error has occurred.";

const BannerAlert = ({ id, message = defaultMessage }: BannerAlertProps) => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="bg-indigo-600 max-w-5xl rounded-md mx-auto">
      <div className="flex py-3 px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2 rounded-lg bg-indigo-800">
            <NotificationIcon color="#FFF" />
          </span>
          <p className="ml-3 font-medium text-white truncate">{message}</p>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            onClick={() => dispatch(deleteAlert(id))}
            className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span className="sr-only">Dismiss</span>
            <CloseIcon color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerAlert;

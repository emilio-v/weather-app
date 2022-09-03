import { useContext } from "react";
import { PlusIcon } from "../assets/icons";
import { addLocation } from "../context/actions";
import { AppContext } from "../context/context";

const AddLocationButton = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="flex justify-center mb-32 mt-8">
      <button
        className="p-4 bg-oxfordBlue-300 rounded"
        onClick={() => dispatch(addLocation(`New Location - ${Math.random()}`))}
      >
        <PlusIcon color="white" />
      </button>
    </div>
  );
};

export default AddLocationButton;

import { useState } from "react";
import { PlusIcon } from "../assets/icons";
import SearchInput from "./SearchInput";

const AddLocationButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex justify-center mb-32 mt-8">
        <button
          className="p-4 bg-oxfordBlue-300 rounded"
          onClick={() => setShowModal(true)}
        >
          <PlusIcon color="white" />
        </button>
      </div>
      {showModal && (
        <>
          <div
            className="p-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full my-6 mx-auto max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <SearchInput onClose={() => setShowModal(false)} />
            </div>
          </div>
          <div className="fixed z-30 min-w-full min-h-screen inset-0 opacity-30 bg-[#2d2e4f8a]" />
        </>
      )}
    </>
  );
};

export default AddLocationButton;

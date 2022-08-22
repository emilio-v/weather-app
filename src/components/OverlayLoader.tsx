import Loader from "./Loader";

const OverlayLoader = () => {
  return (
    <div
      className="absolute z-40 inset-0 bg-gray-500 bg-gray-500/75 transition-opacity flex justify-center items-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Loader />
    </div>
  );
};

export default OverlayLoader;

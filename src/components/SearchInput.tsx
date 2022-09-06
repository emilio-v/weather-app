import { useContext, FormEvent } from "react";
import useForms from "../hooks/useForms";
import { addLocation } from "../context/actions";
import { AppContext } from "../context/context";
import { SendIcon } from "../assets/icons";

type SearchInputProps = {
  onClose: () => void;
};

const SearchInput = ({ onClose }: SearchInputProps) => {
  const { dispatch } = useContext(AppContext);
  const { location, onChange } = useForms({
    location: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addLocation(location));
    onClose();
  };

  return (
    <div className="py-5 px-5 rounded bg-[#2e2c57]">
      <form onSubmit={onSubmit}>
        <div className="flex border-[3px] border-oxfordBlue-300 rounded">
          <input
            className="bg-oxfordBlue-300 w-full py-3 pl-5 focus:outline-0"
            type="text"
            placeholder="Ingrese una ubicación"
            value={location}
            onChange={({ target }): void => {
              onChange(target.value, "location");
            }}
          />
          <div className="p-1 flex bg-oxfordBlue-300">
            <button
              className="p-2 focus:outline-0 focus:bg-[#2e2c57] hover:bg-[#2e2c57] rounded-full"
              type="submit"
            >
              <SendIcon color="transparent" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

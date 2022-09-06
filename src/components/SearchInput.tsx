import { FormEvent } from "react";
import { SendIcon } from "../assets/icons";

import useForms from "../hooks/useForms";

const SearchInput = () => {
  const { location, onChange } = useForms({
    location: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex border-[3px] border-oxfordBlue-300 rounded">
          <input
            className="bg-oxfordBlue-600 w-full py-3 pl-5 focus:outline-0"
            type="text"
            placeholder="Ingrese una ubicación"
            value={location}
            onChange={({ target }): void => {
              onChange(target.value, "location");
            }}
          />
          <div className="p-1 flex">
            <button
              className="p-2 focus:outline-0 focus:bg-[#3c3b56] hover:bg-[#3c3b56] rounded-full"
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

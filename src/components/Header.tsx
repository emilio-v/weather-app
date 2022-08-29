import FindMyLocation from "./FindMyLocation";

const Header = () => {
  return (
    <header className="max-w-[70rem] lg:max-w-[60rem] md:max-w-[50rem] sm:max-w-[40rem] px-10 mx-auto sticky top-0 bg-oxfordBlue">
      <div className="py-5 flex justify-between">
        <h1 className="font-bold">Weather App</h1>
        <FindMyLocation />
      </div>
    </header>
  );
};

export default Header;

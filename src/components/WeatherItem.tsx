import axios from "axios";

type WeatherItemProps = {
  location: string;
};

const WeatherItem = ({ location }: WeatherItemProps) => {
  const search = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response);
  };

  return (
    <div className="max-w-3xl bg-oxfordBlue-300 rounded mx-auto mb-10 p-5">
      <div className="pb-10">
        <h1>{location}</h1>
      </div>
      <button onClick={search}>Click</button>
      <div className="pb-10" />
    </div>
  );
};

export default WeatherItem;

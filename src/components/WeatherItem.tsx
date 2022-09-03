type WeatherItemProps = {
  location: string;
};

const WeatherItem = ({ location }: WeatherItemProps) => {
  return (
    <div className="max-w-3xl bg-oxfordBlue-300 rounded mx-auto mb-10 p-5">
      <div className="pb-10">
        <h1>{location}</h1>
      </div>
      <div className="pb-10" />
    </div>
  );
};

export default WeatherItem;

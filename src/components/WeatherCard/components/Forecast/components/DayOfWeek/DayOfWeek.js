import Date from "../../../../../Date";
import Name from "../../../../../Name";
import TemperatureRange from "../../../../../TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon";

const DayOfWeek = ({ className, day, date, wetherIcon, temperatureRange }) => {
  return (
    <div className={`flex flex-col items-center justify-around ${className}`}>
      <Name value={day} className="font-extrabold text-2xl" />
      <Date value={date} className="font-semibold text-1xl" />
      <WeatherIcon imgUrl={wetherIcon} className="w-5/6 object-contain" />
      <TemperatureRange
        value={temperatureRange}
        className="font-semibold text-1xl"
      />
    </div>
  );
};

export default DayOfWeek;

import Date from "../../../../../Date";
import Name from "../../../../../Name";
import TemperatureRange from "../../../../../TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon";

const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
    </div>
  );
};

export default DayOfWeek;

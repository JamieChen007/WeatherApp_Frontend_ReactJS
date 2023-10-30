import Date from "../../../Date";
import Meta from "./components/Meta";
import Name from "../../../Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";

const CurrentCity = () => {
  return (
    <div>
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
    </div>
  );
};

export default CurrentCity;

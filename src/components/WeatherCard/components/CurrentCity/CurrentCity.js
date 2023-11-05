import Date from "../../../Date";
import Meta from "./components/Meta";
import Name from "../../../Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Image from "./components/Image";
import bg from "./assets/Cloudy_day_background.png";
import icon from "../../../WeatherIcon/assets/Cloudy_day.png";

const CurrentCity = () => {
  return (
    <div className="relative flex flex-col items-center space-y-6">
      <Image imageUrl={bg} alt="cloud" className="absolute top-0 right-0" />
      <Date value="20 July, Sunday 2023" className="text-white" />
      <Name value="New York" className="text-white text-3xl font-bold" />
      <Temperature value="20" className="text-slate-200 text-8xl font-bold" />
      <TemperatureRange value="18 ~ 23" className="text-white" />
      <WeatherIcon imgUrl={icon} alt="cloud" />
      <Meta />
    </div>
  );
};

export default CurrentCity;

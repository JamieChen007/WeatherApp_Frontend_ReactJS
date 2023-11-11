import Date from "../../../Date";
import Meta from "./components/Meta";
import Name from "../../../Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Image from "./components/Image";
import Clouds from "./assets/Cloudy_day_background.png";
import Hail from "./assets/Hail_background.png";
import Rain from "./assets/Rain_background.png";
import Snow from "./assets/Snow_background.png";
import Clear from "./assets/Sunny day_background.png";
import Cloudy_dayIcon from "../../../WeatherIcon/assets/Cloudy_day.png";
import CloudyIcon from "../../../WeatherIcon/assets/Cloudy.png";
import HailIcon from "../../../WeatherIcon/assets/Hail.png";
import RainIcon from "../../../WeatherIcon/assets/Rain.png";
import SnowIcon from "../../../WeatherIcon/assets/Snow.png";
import SunnyIcon from "../../../WeatherIcon/assets/Sunny.png";

const CurrentCity = ({ weatherData }) => {
  let imgUrl;
  let icon;
  switch (weatherData.weather) {
    case "Clear":
      imgUrl = Clear;
      icon = SunnyIcon;
      break;
    case "Clouds":
      imgUrl = Clouds;
      icon = CloudyIcon;
      break;
    case "Hail":
      imgUrl = Hail;
      icon = HailIcon;
      break;
    case "Rain":
      imgUrl = Rain;
      icon = RainIcon;
      break;
    case "Snow":
      imgUrl = Snow;
      icon = SnowIcon;
      break;
    default:
      imgUrl = Clouds;
      icon = CloudyIcon;
      break;
  }

  return (
    <div className="relative flex flex-col items-center h-full justify-around p-3 max-xs:min-h-[550px]">
      <Image
        imageUrl={imgUrl}
        alt={weatherData.weather}
        className="absolute top-0 right-0"
      />
      <Date
        value={weatherData.dateTime}
        className="text-white text-left  text-1xl w-11/12"
      />
      <Name
        value={weatherData.cityName}
        className="text-white text-3xl font-bold"
      />
      <Temperature
        value={weatherData.currentTemp}
        className="text-slate-200 text-8xl font-bold"
      />
      <TemperatureRange
        value={`${weatherData.minTemp} ~ ${weatherData.maxTemp}`}
        className="text-white text-1xl"
      />
      <WeatherIcon imgUrl={icon} alt="cloud" />
      <Meta weatherData={weatherData} />
    </div>
  );
};

export default CurrentCity;

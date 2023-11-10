import DayOfWeek from "./components/DayOfWeek";
import Cloudy_day from "../../../WeatherIcon/assets/Cloudy_day.png";
import Cloudy from "../../../WeatherIcon/assets/Cloudy.png";
import Hail from "../../../WeatherIcon/assets/Hail.png";
import Rain from "../../../WeatherIcon/assets/Rain.png";
import Snow from "../../../WeatherIcon/assets/Snow.png";
import Sunny from "../../../WeatherIcon/assets/Sunny.png";

const Forecast = ({ forecastData }) => {
  let icon0;
  switch (forecastData[0].weather) {
    case "Clear":
      icon0 = Sunny;
      break;
    case "Clouds":
      icon0 = Cloudy;
      break;
    case "Hail":
      icon0 = Hail;
      break;
    case "Rain":
      icon0 = Rain;
      break;
    case "Snow":
      icon0 = Snow;
      break;
    default:
      icon0 = Cloudy;
      break;
  }

  let icon1;
  switch (forecastData[1].weather) {
    case "Clear":
      icon1 = Sunny;
      break;
    case "Clouds":
      icon1 = Cloudy;
      break;
    case "Hail":
      icon1 = Hail;
      break;
    case "Rain":
      icon1 = Rain;
      break;
    case "Snow":
      icon1 = Snow;
      break;
    default:
      icon1 = Cloudy;
      break;
  }

  let icon2;
  switch (forecastData[2].weather) {
    case "Clear":
      icon2 = Sunny;
      break;
    case "Clouds":
      icon2 = Cloudy;
      break;
    case "Hail":
      icon2 = Hail;
      break;
    case "Rain":
      icon2 = Rain;
      break;
    case "Snow":
      icon2 = Snow;
      break;
    default:
      icon2 = Cloudy;
      break;
  }

  let icon3;
  switch (forecastData[3].weather) {
    case "Clear":
      icon3 = Sunny;
      break;
    case "Clouds":
      icon3 = Cloudy;
      break;
    case "Hail":
      icon3 = Hail;
      break;
    case "Rain":
      icon3 = Rain;
      break;
    case "Snow":
      icon3 = Snow;
      break;
    default:
      icon3 = Cloudy;
      break;
  }

  return (
    <div className="flex justify-between text-center h-full">
      <DayOfWeek
        day={forecastData[0].dayOfWeek}
        date={forecastData[0].date}
        wetherIcon={icon0}
        temperatureRange={`${forecastData[0].minTemp} ~ ${forecastData[0].maxTemp}`}
      />
      <DayOfWeek
        day={forecastData[1].dayOfWeek}
        date={forecastData[1].date}
        wetherIcon={icon1}
        temperatureRange={`${forecastData[1].minTemp} ~ ${forecastData[1].maxTemp}`}
      />
      <DayOfWeek
        // className="max-md:hidden"
        day={forecastData[2].dayOfWeek}
        date={forecastData[2].date}
        wetherIcon={icon2}
        temperatureRange={`${forecastData[2].minTemp} ~ ${forecastData[2].maxTemp}`}
      />
      <DayOfWeek
        className="max-lg:hidden"
        day={forecastData[3].dayOfWeek}
        date={forecastData[3].date}
        wetherIcon={icon3}
        temperatureRange={`${forecastData[3].minTemp} ~ ${forecastData[3].maxTemp}`}
      />
    </div>
  );
};

export default Forecast;

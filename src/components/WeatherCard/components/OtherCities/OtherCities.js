import City from "./components/City";
import Cloudy_day from "../../../WeatherIcon/assets/Cloudy_day.png";
import Cloudy from "../../../WeatherIcon/assets/Cloudy.png";
import Hail from "../../../WeatherIcon/assets/Hail.png";
import Rain from "../../../WeatherIcon/assets/Rain.png";
import Snow from "../../../WeatherIcon/assets/Snow.png";
import Sunny from "../../../WeatherIcon/assets/Sunny.png";
import London from "./assets/London.png";
import Newyork from "./assets/Newyork.png";
import Shanghai from "./assets/Shanghai.png";
import Sydney from "./assets/Sydney.png";

const OtherCities = ({ weatherDataList, getOtherCityClick }) => {
  let icon0;
  switch (weatherDataList[0].weather) {
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
  switch (weatherDataList[1].weather) {
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
  switch (weatherDataList[2].weather) {
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
  switch (weatherDataList[3].weather) {
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
    <div className="flex justify-around h-full ">
      <City
        getOtherCityClick={getOtherCityClick}
        bg={Sydney}
        cityName={weatherDataList[0].cityName}
        weatherIcon={icon0}
        temperatureRange={`${weatherDataList[0].minTemp} ~ ${weatherDataList[0].maxTemp}`}
      />
      <City
        getOtherCityClick={getOtherCityClick}
        bg={Shanghai}
        cityName={weatherDataList[1].cityName}
        weatherIcon={icon1}
        temperatureRange={`${weatherDataList[1].minTemp} ~ ${weatherDataList[1].maxTemp}`}
      />
      <City
        className="max-lg:hidden"
        getOtherCityClick={getOtherCityClick}
        bg={Newyork}
        cityName={weatherDataList[2].cityName}
        weatherIcon={icon2}
        temperatureRange={`${weatherDataList[2].minTemp} ~ ${weatherDataList[2].maxTemp}`}
      />
      <City
        className="max-xl:hidden"
        getOtherCityClick={getOtherCityClick}
        bg={London}
        cityName={weatherDataList[3].cityName}
        weatherIcon={icon3}
        temperatureRange={`${weatherDataList[3].minTemp} ~ ${weatherDataList[3].maxTemp}`}
      />
    </div>
  );
};

export default OtherCities;

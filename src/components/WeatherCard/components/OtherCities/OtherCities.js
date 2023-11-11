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
  const iconArr = weatherDataList.map((weatherData) => {
    switch (weatherData.weather) {
      case "Clear":
        return Sunny;
      case "Clouds":
        return Cloudy;
      case "Hail":
        return Hail;
      case "Rain":
        return Rain;
      case "Snow":
        return Snow;
      default:
        return Cloudy;
    }
  });

  return (
    <div className="flex justify-around h-full max-xs:hidden">
      {weatherDataList.length > 0 &&
        weatherDataList.map((weatherData, index) => (
          <City
            key={index}
            getOtherCityClick={getOtherCityClick}
            className={
              (index === 3 && "max-xl:hidden") ||
              (index === 2 && "max-lg:hidden")
            }
            bg={
              (index === 0 && Sydney) ||
              (index === 1 && Shanghai) ||
              (index === 2 && Newyork) ||
              (index === 3 && London)
            }
            cityName={weatherData.cityName}
            weatherIcon={iconArr[index]}
            temperatureRange={`${weatherData.minTemp} ~ ${weatherData.maxTemp}`}
          />
        ))}
    </div>
  );
};

export default OtherCities;

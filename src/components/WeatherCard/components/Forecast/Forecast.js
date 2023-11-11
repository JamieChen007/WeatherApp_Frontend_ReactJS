import DayOfWeek from "./components/DayOfWeek";
import Cloudy_day from "../../../WeatherIcon/assets/Cloudy_day.png";
import Cloudy from "../../../WeatherIcon/assets/Cloudy.png";
import Hail from "../../../WeatherIcon/assets/Hail.png";
import Rain from "../../../WeatherIcon/assets/Rain.png";
import Snow from "../../../WeatherIcon/assets/Snow.png";
import Sunny from "../../../WeatherIcon/assets/Sunny.png";

const Forecast = ({ forecastData }) => {
  const iconArr = forecastData.map((forecastData) => {
    switch (forecastData.weather) {
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
    <div className="flex justify-between text-center h-full max-xs:flex-col max-xs:bg-slate-50 max-xs:rounded-2xl max-xs:border max-xs:divide-y">
      {forecastData.length > 0 &&
        forecastData.map((forecastData, index) => (
          <DayOfWeek
            key={index}
            className={index === 3 && "max-lg:hidden max-xs:flex"}
            day={forecastData.dayOfWeek}
            date={forecastData.date}
            wetherIcon={iconArr[index]}
            temperatureRange={`${forecastData.minTemp} ~ ${forecastData.maxTemp}`}
          />
        ))}
    </div>
  );
};

export default Forecast;

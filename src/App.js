import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard";
import bg from "./assets/bg.png";
import { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import TipsModal from "./components/UI/TipsModal/";

function App() {
  const apiKey = process.env.REACT_APP_APIKET;
  const apiUrl = process.env.REACT_APP_APIURL;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [weatherDataList, setWeatherDataList] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  const [citiesList, setCitiesList] = useState([
    "sydney",
    "melbourne",
    "shanghai",
    "guangzhou",
    "brisbane",
  ]);

  const getSearchCity = async (value) => {
    const result = await fetchData(value);
    if (!result) {
      setIsError(true);
      return;
    }
    const newCitiesList = [...citiesList];
    newCitiesList.pop();
    newCitiesList.unshift(value);
    setCitiesList(newCitiesList);
  };

  const fetchData = async (cityName, forecastCity, lon, lat) => {
    let url;
    if (cityName) {
      url = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric`;
    } else if (forecastCity) {
      url = `${apiUrl}forecast?q=${forecastCity}&appid=${apiKey}&units=metric`;
    } else {
      url = `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchDataSet = useCallback(async (cityName) => {
    try {
      const weatherData = await fetchData(cityName);
      const airData = await fetchData(
        null,
        null,
        weatherData.coord.lon,
        weatherData.coord.lat
      );
      const singleCityData = {
        cityName: weatherData.name,
        dateTime: dayjs().format("DD MMMM, dddd HH:mm"),
        minTemp: Math.ceil(weatherData.main.temp_min),
        maxTemp: Math.ceil(weatherData.main.temp_max),
        currentTemp: Math.ceil(weatherData.main.temp),
        weather: weatherData.weather[0].main,
        humidity: Math.ceil(weatherData.main.humidity),
        windSpeed: Math.ceil(weatherData.wind.speed),
        PM25: Math.ceil(airData.list[0].components.pm2_5),
      };
      return singleCityData;
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const formatForecastData = (forecastFetchResult) => {
    let forecastData = [];
    // get next 4 day data
    for (let i = 1; i <= 4; i++) {
      // get next 'i' day date
      const futureDate = dayjs().add(i, "day").format("YYYY-MM-DD");
      // filter to get next 'i' day's weather data list
      const futureDateDataList = forecastFetchResult.list.filter(
        (forecastFetchResult) =>
          dayjs(futureDate).isSame(
            dayjs(forecastFetchResult.dt_txt).format("YYYY-MM-DD"),
            "day"
          )
      );
      // get all min_temp in next 'i' day weather data list, and set in minArr
      const minArr = futureDateDataList.map(
        (futureDateData) => futureDateData.main.temp_min
      );
      // get all max_temp in next 'i' day weather data list, and set in maxArr
      const maxArr = futureDateDataList.map(
        (futureDateData) => futureDateData.main.temp_max
      );
      // use Math.min to find minimum number in minArr, and return as min_tmp
      const min_temp = Math.min(...minArr);
      // use Math.max to find maximum number in maxArr, and return as max_temp
      const max_temp = Math.max(...maxArr);

      // format data and push into 'forecastData' array
      forecastData.push({
        date: dayjs(futureDate).format("DD MMMM"),
        dayOfWeek: dayjs(futureDate).format("dddd"),
        minTemp: Math.ceil(min_temp),
        maxTemp: Math.ceil(max_temp),
        // use index 3 weather as that day weather condition
        weather: futureDateDataList[3].weather[0].main,
      });
    }

    return forecastData;
  };

  useEffect(() => {
    const fetchAllAndSetState = async () => {
      try {
        if (citiesList.length > 0) {
          const citiesListData = await Promise.all(
            citiesList.map(async (city) => {
              const singleCityData = await fetchDataSet(city);
              return singleCityData;
            })
          );
          setWeatherDataList(citiesListData);
          const forecastFetchResult = await fetchData(null, citiesList[0]);
          const forecastData = formatForecastData(forecastFetchResult);
          setForecastData(forecastData);
          setIsLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchAllAndSetState();
  }, [citiesList, fetchDataSet]);

  const onTipsConfirmBtnClick = () => {
    setIsError(false);
  };

  const getOtherCityClick = (value) => {
    const newCitiesList = [...citiesList];
    const newCitiesFilterList = newCitiesList.filter(
      (city) => city.toLowerCase() !== value.toLowerCase()
    );

    newCitiesFilterList.unshift(value);
    setCitiesList(newCitiesFilterList);
  };

  return (
    <BackgroundImage
      imageUrl={bg}
      alt="cloud"
      className={
        "h-screen max-md:h-full max-md:py-6 bg-cover flex items-center font-alimama"
      }
    >
      {isError && (
        <TipsModal
          tips="City not found, please double check."
          onTipsConfirmBtnClick={onTipsConfirmBtnClick}
        />
      )}
      <WeatherCard
        isLoading={isLoading}
        weatherDataList={weatherDataList}
        getSearchCity={getSearchCity}
        forecastData={forecastData}
        getOtherCityClick={getOtherCityClick}
      />
    </BackgroundImage>
  );
}

export default App;

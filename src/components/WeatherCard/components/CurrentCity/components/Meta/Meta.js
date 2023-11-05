import MetaItem from "./components/MetaItem";
import wind from "./assets/wind_speed.svg";
import humidity from "./assets/humidity.svg";
import airQuality from "./assets/PM2.5.svg";
import Somatosensory from "./assets/Somatosensory_temperature.svg";

const Meta = () => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4">
      <MetaItem imageUrl={wind} value="9 km/h" alt="wind icon" />
      <MetaItem imageUrl={humidity} value="85%" alt="humidity icon" />
      <MetaItem imageUrl={airQuality} value="75μg" alt="airQuality icon" />
      <MetaItem imageUrl={Somatosensory} value="26°" alt="Somatosensory icon" />
    </div>
  );
};

export default Meta;

import DayOfWeek from "./components/DayOfWeek";

const Forecast = () => {
  return (
    <div className="flex">
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
    </div>
  );
};

export default Forecast;

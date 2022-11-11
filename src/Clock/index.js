import CurrentDate from "../CurrentDate";
import "./style.css";

const Clock = () => {

  const { myDate } = CurrentDate();

  const dateRender = myDate.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  });

  const timeRender = myDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <>
      <div className="clock">
        {dateRender}, {timeRender}
      </div>
    </>
  )
};

export default Clock;
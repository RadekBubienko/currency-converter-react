import CurrentDate from "../CurrentDate";
import { ClockContainer } from "./styled";

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
      <ClockContainer>
        {dateRender}, {timeRender}
      </ClockContainer>
    </>
  )
};

export default Clock;
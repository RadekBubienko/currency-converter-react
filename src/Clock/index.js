import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

  const {
    dateRender,
    timeRender,
  } = useCurrentDate();

  return (
    <>
      <ClockContainer>
        {dateRender}, {timeRender}
      </ClockContainer>
    </>
  )
};

export default Clock;
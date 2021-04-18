import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { InView } from "react-intersection-observer";
const CountUp = ({ end }) => {
  const [inView, setInView] = React.useState(false);
  const { countUp, start } = useCountUp({
    end: end,
    start: 0,
    duration: 7,
    suffix: "+",
  });
  useEffect(() => {
    start();
  }, [inView]);
  return (
    <InView onChange={setInView}>
      <h4 className="is-size-3">{countUp}</h4>
    </InView>
  );
};

export default CountUp;

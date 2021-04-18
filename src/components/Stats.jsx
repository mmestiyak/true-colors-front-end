import React from "react";
import CountUp from "./CountUp";

const Stats = () => {
  return (
    <div className="section is-medium">
      <div className="container ">
        <div className="columns ">
          <div className="column  m-3 card has-background-primary has-text-white is-4 p-4 has-text-centered ">
            <CountUp end={842} />
            <h3 className="py-3 is-size-3">Happy Clients</h3>
          </div>
          <div className="column m-3 card has-background-primary has-text-white is-4  p-4 has-text-centered">
            <CountUp end={242} />
            <h3 className="py-3 is-size-3">Interrior Paints</h3>
          </div>
          <div className="column m-3 card has-background-primary has-text-white is-4 p-4 has-text-centered ">
            <CountUp end={520} />
            <h3 className="py-3 is-size-3">Exterrior Paints</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-reveal";
import UserContext from "../../context-state";
import { Box } from "@mui/system";
import { weekdays, months } from "../../config/date-time-variables";
import useDate from "../../utils/date-hook";
import "../../styling/date-styling.css";

const Date = () => {
  const { theme } = useContext(UserContext);

  const locale = "en";

  const { weekDay, month, time, dateOfMonth } = useDate();

  return (
    <Fade bottom delay={2600}>
      <div className="date-container">
        <div className="caltwo">
          <div className="day">{weekDay}</div>
          <div className="month">
            {month} {dateOfMonth}
          </div>
        </div>

        <div className="clock">
          <div className="hour time">{time}</div>
        </div>
      </div>
      <div className="current-status-container">
        <div className={`line-${theme}`}></div>
        <div classNmae="status-p">available for work</div>
        <div className={`line-${theme}`}></div>
      </div>
    </Fade>
  );
};

export default Date;

import React from "react";
import moment from "moment";
// arrow functions //
export const Time = time => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

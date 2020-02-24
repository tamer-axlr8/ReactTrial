import React from "react";
import moment from "moment-mini";

const EventWrapper = ({ event, children }) => {
  const { title, className } = children.props;
  const customClass = `${className} rbc-event--${event.id}`;
  const hourStart = moment(event.start).hour();
  const hourStop = moment(event.end).hour();
  const gridRowStart = hourStart + 1;

  return (
    <div
      title={title}
    >
      {children.props.children}
    </div>
  );
};

export default EventWrapper;
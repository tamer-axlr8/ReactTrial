  
import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from './events'
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./Calender.scss"

const propTypes = {}

const localizer = momentLocalizer(moment)
class Selectable extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { events }
  }
  

  render() {
    return (
      <>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.DAY}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          dayLayoutAlgorithm="no-overlap" 
          step={5}
          timeslots={3}
        />
      </>
    )
  }
}

Selectable.propTypes = propTypes

export default Selectable
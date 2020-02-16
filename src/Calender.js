import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import './Calender.scss'

export default class Calender extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date("2020-02-15T04:00:00"), end: new Date("2020-02-15T04:15:00") },
      { title: 'Event Now', start: new Date("2020-02-15T04:00:00"), end: new Date("2020-02-15T06:00:00") },
      { title: 'Event Now', start: new Date("2020-02-15T04:00:00"), end: new Date("2020-02-15T05:00:00") },
      { title: 'Event Now', start: new Date("2020-02-15T04:00:00"), end: new Date("2020-02-15T04:30:00") },
      { title: 'Event Now', start: new Date("2020-02-15T04:30:00"), end: new Date("2020-02-15T05:00:00") },
    ]
  }

  componentDidUpdate(){
    window.dispatchEvent(new Event('resize'))
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="timeGrid"
            header={{
              left: 'prev,next,today',
              center: 'title',
              right: ''
            }}
            contentHeight={'auto'}
            aspectRatio={0.5}
            timeGridEventMinHeight={200}
            slotEventOverlap={false}
            selectable={true}
            plugins={[timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            slotDuration={'01:00:00'}
            />
        </div>
      </div>
    )
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

}

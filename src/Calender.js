import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

/* import './Calender.scss' */

export default class Calender extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date("2020-02-24T04:00:00"), end: new Date("2020-02-24T04:05:00") },
      { title: 'Event Now', start: new Date("2020-02-24T04:05:00"), end: new Date("2020-02-24T04:10:00") },
      { title: 'Event Now', start: new Date("2020-02-24T04:10:00"), end: new Date("2020-02-24T04:15:00") },
      { title: 'Event Now', start: new Date("2020-02-24T04:00:00"), end: new Date("2020-02-24T04:30:00") },
      { title: 'Event Now', start: new Date("2020-02-24T04:30:00"), end: new Date("2020-02-24T05:00:00") },
    ]
  }

  componentDidUpdate(){
    window.dispatchEvent(new Event('resize'))
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="listDay"
            header={{
              left: 'prev,next,today',
              center: 'title',
              right: 'timeGridDay,listDay'
            }}
            slotEventOverlap={false}
            selectable={true}
            plugins={[timeGridPlugin, interactionPlugin, listPlugin ]}
            ref={ this.calendarComponentRef }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            slotDuration={'00:15:00'}
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

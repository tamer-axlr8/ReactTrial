import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react';

import './main.scss'

class Calender extends React.Component{

    render(){
        return (
            <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
        );
    }
}

export default Calender;

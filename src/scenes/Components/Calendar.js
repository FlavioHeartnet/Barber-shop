import React from 'react';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import FullCalendar from 'fullcalendar-reactwrapper';
import Back from './Back'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events:[
                {
                    title: 'Pé e Mão',
                    start: '2019-09-01'
                },
                {
                    title: 'Long Event',
                    start: '2019-09-07',
                    end: '2019-09-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-09-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-09-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2017-05-11',
                    end: '2017-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2017-05-12T10:30:00',
                    end: '2017-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2017-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2019-09-28'
                }
            ],
        }
    }

    render() {
        return (
            <div id="example-component">
                <Back/>
                <h1>Agende um horario!</h1>
                <FullCalendar 
                    id = "999"
                    header = {{
                        left: 'prev,next today myCustomButton',
                        center: 'title',
                        right: 'month,basicWeek'
                    }}
                    defaultDate={'2019-09-12'}
                    navLinks= {true} // can click day/week names to navigate views
                    editable= {true}
                    eventLimit= {true} // allow "more" link when too many events
                    events = {this.state.events}
                />
            </div>
        );
    }
}

export default Calendar;
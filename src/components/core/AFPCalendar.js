import React from 'react'

import { 
  Calendar,
  momentLocalizer,
} from 'react-big-calendar'

import {
  makeStyles,
} from '@material-ui/core/styles'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'

const events = [
  {
    title: 'Leave',
    start: new Date('2021-01-14T00:00:00'),
    end: new Date('2021-01-19T23:59:00'),
    allDay: true,
    resource: null,
  },
  {
    title: 'PHA',
    start: new Date('2021-01-22T08:00:00'),
    end: new Date('2021-01-22T12:00:00'),
    allDay: false,
    resource: null,
  },
  {
    title: 'Final Out',
    start: new Date('2021-01-30T10:00:00'),
    end: new Date('2021-01-30T10:30:00'),
    allDay: false,
    resource: null,
  }
]

const useStyles = makeStyles(theme => ({
  calendar: {
    margin: theme.spacing(2),
  },
}))

const localizer = momentLocalizer(moment)

const AFPCalendar = props => {
  const classes = useStyles()

  return (
    <Calendar
      className={classes.calendar}
      localizer={localizer}
      events={events}
      startAccessor='start'
      selectable
      endAccessor='end'
      style={{ height: 1000 }}
    />
  )
}

export default AFPCalendar
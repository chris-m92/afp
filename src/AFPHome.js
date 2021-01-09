import React from 'react'

import {
  Grid,
} from '@material-ui/core'

import {
  AFPCalendar,
  AFPSidebar,
  Navigation,
} from './components/core'

const AFPHome = props => {

  return (
    <React.Fragment>
      <Navigation state={props.state} setState={props.setState} />
      <Grid
        container
        direction='row'
      >
        <Grid item xs={12} lg={10}>
          <AFPCalendar />
        </Grid>
        <Grid item xs={12} lg={2}>
          <AFPSidebar />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AFPHome
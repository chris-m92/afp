import React from 'react'

import {
  AFPShortcuts,
  AFPFavorites,
} from '../core'

import {
  Divider,
  Grid,
} from '@material-ui/core'

const AFPSidebar = props => {
  return (
    <Grid
      container
      direction='column'
    >
      <AFPShortcuts />
      <Divider variant='middle' />
      <AFPFavorites />
    </Grid>
  )
}

export default AFPSidebar
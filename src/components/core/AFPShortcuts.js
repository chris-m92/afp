import React from 'react'

import {
  Button,
  Divider,
  Grid,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import {
  DirectionsRun as DirectionsRunIcon,
  LocalHospital as LocalHospitalIcon,
  Map as MapIcon,
  School as SchoolIcon,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
  buttonError: {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
  buttonSuccess: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
  },
  buttonWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  marginsMd: {
    margin: theme.spacing(2),
  },
}))

const AFPShortcuts = props => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.marginsMd}
      item
      xs={12}
    >
      <Button
        className={classes.button}
        classes={{
          contained: classes.buttonSuccess
        }}
        fullWidth
        size='large'
        startIcon={<LocalHospitalIcon />}
        variant='contained'
      >
        {`IMR - Status: Current`}
      </Button>
      <Button
        className={classes.button}
        classes={{
          contained: classes.buttonWarning
        }}
        fullWidth
        size='large'
        startIcon={<DirectionsRunIcon />}
        variant='contained'
      >
        {`Fitness Test: Due: 31 January 2021`}
      </Button>
      <Button
        className={classes.button}
        classes={{
          contained: classes.buttonSuccess
        }}
        fullWidth
        size='large'
        startIcon={<MapIcon />}
        variant='contained'
      >
        {`Leaveweb - Balance: 36.5 (10 Use/Lose)`}
      </Button>
      <Button
        className={classes.button}
        classes={{
          contained: classes.buttonError
        }}
        fullWidth
        size='large'
        startIcon={<SchoolIcon />}
        variant='contained'
      >
        {`ADLS - Training Items Due: 2`}
      </Button>
    </Grid>
  )
}

export default AFPShortcuts
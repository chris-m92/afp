import React from 'react'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import {
  ClassificationBanner,
} from './components/core'

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  marginsMd: {
    margin: theme.spacing(2),
  },
  root: {
    marginTop: theme.spacing(2),
    minWidth: 275,
  },
  title: {
    fontsize: 14,
  },
}))

const AFPData = props => {

  const classes = useStyles()

  const [_state, _setState] = React.useState({
    branch: 'air',
    firstName: '',
    lastName: '',
    rank: 'Capt',
  })

  const handleBranchChange = value => {
    _setState({
      ..._state,
      branch: value,
    })
  }

  const handleRankChange = value => {
    _setState({
      ..._state,
      rank: value,
    })
  }

  const handleFirstNameChange = value => {
    _setState({
      ..._state,
      firstName: value,
    })
  }

  const handleLastNameChange = value => {
    _setState({
      ..._state,
      lastName: value,
    })
  }

  const handleSubmit = () => {
    props.setState(_state)
  }

  return (
    <React.Fragment>
      <ClassificationBanner />
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Card
          className={classes.root}
          variant='outlined'
        >
          <CardContent
            className={classes.marginsMd}
          >
            <Typography
              className={classes.title}
              align='center'
            >
              Enter Demo Portal Data
            </Typography>
            <FormControl
              className={classes.formControl}
              variant='outlined'
            >
              <InputLabel>Service Branch</InputLabel>
              <Select
                label='Service Branch'
                onChange={event => handleBranchChange(event.target.value)}
                value={_state.branch}
              >
                <MenuItem value='air'>Air Force</MenuItem>
                <MenuItem value='space'>Space Force</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className={classes.formControl}
              variant='outlined'
            >
              <InputLabel>Rank</InputLabel>
              <Select
                label='Rank'
                onChange={event => handleRankChange(event.target.value)}
                value={_state.rank}
              >
                <MenuItem value='AB'>AB</MenuItem>
                <MenuItem value='Amn'>Amn</MenuItem>
                <MenuItem value='A1C'>A1C</MenuItem>
                <MenuItem value='SrA'>SrA</MenuItem>
                <MenuItem value='SSgt'>SSgt</MenuItem>
                <MenuItem value='TSgt'>TSgt</MenuItem>
                <MenuItem value='MSgt'>MSgt</MenuItem>
                <MenuItem value='SMSgt'>SMSgt</MenuItem>
                <MenuItem value='CMSgt'>CMSgt</MenuItem>
                <MenuItem value='2Lt'>2Lt</MenuItem>
                <MenuItem value='1Lt'>1Lt</MenuItem>
                <MenuItem value='Capt'>Capt</MenuItem>
                <MenuItem value='Maj'>Maj</MenuItem>
                <MenuItem value='LtCol'>LtCol</MenuItem>
                <MenuItem value='Col'>Col</MenuItem>
                <MenuItem value='Brig. Gen.'>Brig. Gen.</MenuItem>
                <MenuItem value='Maj. Gen.'>Maj. Gen.</MenuItem>
                <MenuItem value='Lt. Gen.'>Lt. Gen.</MenuItem>
                <MenuItem value='Gen.'>Gen.</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.formControl}
              label='First Name'
              onChange={event => handleFirstNameChange(event.target.value)}
              value={_state.firstName}
              variant='outlined'
            />
            <TextField
              className={classes.formControl}
              label='Last Name'
              onChange={event => handleLastNameChange(event.target.value)}
              value={_state.lastName}
              variant='outlined'
            />
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              color='primary'
              onClick={handleSubmit}
              variant='contained'
            >
              Get Started
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default AFPData
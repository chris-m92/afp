import React from 'react'

import {
  Button,
  Grid,
  Link,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import {
  Email as EmailIcon,
  MonetizationOn as MonetizationOnIcon,
  School as SchoolIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Work as WorkIcon,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
  },

  marginsMd: {
    margin: theme.spacing(2),
  },
}))

const AFPFavorites = props => {
  const classes = useStyles()

  const favorites = [
    {
      text: 'Webmail',
      link: '#',
      icon: <EmailIcon />
    },
    {
      text: 'vMPF',
      link: '#',
      icon: <SupervisedUserCircleIcon />,
    },
    {
      text: 'MyVector',
      link: '#',
      icon: <WorkIcon />,
    },
    {
      text: 'AFVEC',
      link: '#',
      icon: <SchoolIcon />,
    },
    {
      text: 'MyPay',
      link: '#',
      icon: <MonetizationOnIcon />,
    }
  ]

  return (
    <Grid
      className={classes.marginsMd}
      item
      xs={12}
    >
      {favorites.map(favorite => (
        <Button
          className={classes.button}
          fullWidth
          size='large'
          startIcon={favorite.icon}
        >
          <Link
            href={favorite.link}
          >
            {favorite.text}
          </Link>
        </Button>
      ))}
    </Grid>
  )
}

export default AFPFavorites
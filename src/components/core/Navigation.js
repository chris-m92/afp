import React from 'react'

import {
  AppBar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import {
  AccountCircle as AccountCircleIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
} from '@material-ui/icons'

import AFLogo from '../../images/usaf.jpg'
import SFLogo from '../../images/ussf.png'

import {
  ClassificationBanner,
} from '../core'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  marginRMd: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navigation: {
    backgroundColor: '#0D182C',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  vertDivider: {
    backgroundColor: '#FFFFFF',
    marginRight: theme.spacing(2),
    width: '2px',
  }
}))

const Navigation = props => {
  const classes = useStyles()

  const [_state, _setState] = React.useState({
    dialog: {
      anchor: null,
      name: null,
    }
  })

  const menuOptions = [
    'NEWS & ANNOUNCEMENTS',
    'BASE ORG. & FUNCTIONAL AREAS',
    'APPLICATIONS',
    'CAREER & TRAINING',
    'LIFE & FITNESS',
    'LIBRARY & RESOURCES',
  ]

  const handleLogout = () => {
    _setState({
      dialog: {
        anchor: null,
        name: null,
      }
    })

    props.setState({
      branch: 'air',
      firstName: null,
      lastName: null,
      rank: 'Capt',
    })
  }

  const MobileMenu = () => {
    return (
      <Menu
        anchorEl={_state.dialog.anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        onClose={() => _setState({
          ..._state,
          dialog: {
            anchor: null,
            name: null,
          }
        })}
        open={_state.dialog.name === 'menu'}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menuOptions.map(option => (
          <MenuItem
            key={option}
            onClick={() => _setState({
              ..._state,
              dialog: {
                anchor: null,
                name: null,
              }
            })}
          >{option}</MenuItem>
        ))}
      </Menu>
    )
  }

  const UserMenu = () => {
    return (
      <Menu
        anchorEl={_state.dialog.anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        onClose={() => _setState({
          ..._state,
          dialog: {
            anchor: null,
            name: null,
          }
        })}
        open={_state.dialog.name === 'user'}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          onClick={handleLogout}
        >Log Out</MenuItem>
      </Menu>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.navigation}
        position='static'
      >
        <ClassificationBanner
          classification='unclassified'
        />
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge='start'
          >
            <img
              alt={`${props.state.branch === 'air' ? 'Air Force' : 'Space Force'} Logo`}
              src={props.state.branch === 'air' ? AFLogo : SFLogo}
              height='50px'
            />
          </IconButton>
          <div className={classes.sectionDesktop}>
            {menuOptions.map(option => (
              <React.Fragment
                key={option}
              >
                <Typography
                  className={classes.marginRMd}
                  variant='subtitle2'
                >
                  {option}
                </Typography>
                <Divider 
                  className={classes.vertDivider} 
                  flexItem
                  orientation='vertical'
                />
              </React.Fragment>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              color='inherit'
              onClick={event => _setState({
                ..._state,
                dialog: {
                  anchor: event.currentTarget,
                  name: 'menu',
                }
              })}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
          <IconButton
            color='inherit'
          >
            <SearchIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography
            className={classes.marginRMd}
            variant='subtitle2'
          >
            {`Welcome ${props.state.rank}. ${props.state.lastName}`}
          </Typography>
          <IconButton
            color='inherit'
            onClick={event => _setState({
              ..._state,
              dialog: {
                anchor: event.currentTarget,
                name: 'user',
              }
            })}
          >
            <AccountCircleIcon />
          </IconButton>
          <MobileMenu />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
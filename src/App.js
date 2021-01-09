import React from 'react'

import {
  CssBaseline,
} from '@material-ui/core'

import AFPHome from './AFPHome'
import AFPData from './AFPData'

const App = () => {

  const [state, setState] = React.useState({
    branch: 'air',
    firstName: null,
    lastName: null,
    rank: 'Capt',
  })

  return (
    <div className='App'>
      <CssBaseline />
      {state.firstName === null || state.lastName === null ? 
        <AFPData setState={setState} /> : 
        <AFPHome state={state} setState={setState} />
      }
    </div >
  )
}

export default App

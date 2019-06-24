import { Route, Switch } from 'react-router-dom'
import AllComponents from '../components/AllComponents'
import React from 'react'


const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AllComponents} />
        <Route path="/allComponents" component={AllComponents} />
      </Switch>
    </>
  )
}

export default Routes

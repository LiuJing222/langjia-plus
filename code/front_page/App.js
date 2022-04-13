import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Cover from './Cover';
import Login from './Login';
import Home from './Home'

const App = () => {
  return (
    <div>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Cover}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Router>
      
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Cover from './Cover';
import Login from './Login';
import Home from './Home';
import Inspiration from './Inspiration';

const App = () => {
  return (
    <div>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Cover}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/Ins" component={Inspiration}></Route>
          </Switch>
        </Router>
      
    </div>
  )
}

export default App

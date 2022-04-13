import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Cover from './Cover';
import Login from './Login';

const App = () => {
  return (
    <div>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Cover}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      
    </div>
  )
}

export default App

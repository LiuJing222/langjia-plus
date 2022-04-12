import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Cover from './Cover';

const App = () => {
  return (
    <div>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Cover}></Route>
            
          </Switch>
        </Router>
      
    </div>
  )
}

export default App

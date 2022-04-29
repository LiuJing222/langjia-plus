import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import BackHome from './BackHome';
import BackLogin from "./BackLogin"
import BackUserData from './BackUserData';
import UserIns from "./UserIns"
import BackUserManage from './BackUserManage';
import BackInsManage from './BackInsManage';
const App = () => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={BackHome}></Route>
          {/* <Route exact path="/" component={BackLogin}></Route> */}
          <Route exact path="/backusermanage" component={BackUserManage}></Route>
          <Route exact path="/backuserdata" component={BackUserData}></Route>

          <Route exact path="/backuser/ins" component={UserIns}></Route>
          <Route exact path="/backinsmanage" component={BackInsManage}></Route>


        </Switch>
      </Router>

    </div>
  )
}

export default App

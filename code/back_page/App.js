import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import BackHome from './BackHome';
import BackLogin from "./BackLogin"
import UserIns from "./UserIns"
import UserGood from "./UserGood"
import BackUserManage from './BackUserManage';
import BackInsManage from './BackInsManage';
import UserDesign from './UserDesign';
import Furniture from './Furniture';
import BackManagerData from './BackManagerData';
const App = () => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={BackHome}></Route>
          {/* <Route exact path="/" component={BackLogin}></Route> */}
          <Route exact path="/backusermanage" component={BackUserManage}></Route>

          <Route exact path="/backuser/ins" component={UserIns}></Route>
          <Route exact path="/backuser/good" component={UserGood}></Route>
          <Route exact path="/backuser/design" component={UserDesign}></Route>
          <Route exact path="/backinsmanage" component={BackInsManage}></Route>
          <Route exact path="/backfurniture" component={Furniture}></Route>
          <Route exact path="/backmanagerdata" component={BackManagerData}></Route>


        </Switch>
      </Router>

    </div>
  )
}

export default App

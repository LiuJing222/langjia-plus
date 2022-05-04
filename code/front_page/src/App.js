import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css'
import Cover from './Cover';
import Login from './Login';
import Home from './Home';
import Inspiration from './Inspiration';
import InsContent from './InsContent';
import LivingTip from './LivingTip';
import KitchenTip from './KitchenTip';
import WashRoomTip from './WashRoomTip';
import BedRoomTip from './BedRoomTip';
import StudyRoomTip from './StudyRoomTip'
import BalconyTip from './BalconyTip'
import Recommend from './Recommend';
import Help from './Help';
import PersonalCenter from './PersonalCenter';
import Search from './Search';
import Designsort from './Designsort'
import CreatePage from './CreatePage';
import DesingnerPage from './DesingnerPage';
import Rec from './Rec'

const App = () => {
  return (
    <div>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Cover}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/ins" component={Inspiration}></Route>
            <Route path="/inscon" component={InsContent}></Route>
          <Route path="/livingtip" component={LivingTip}></Route>
          <Route path="/kitchentip" component={KitchenTip}></Route>
          <Route path="/washroomtip" component={WashRoomTip}></Route>
          <Route path="/bedroomtip" component={BedRoomTip}></Route>
          <Route path="/studyroomtip" component={StudyRoomTip}></Route>
          <Route path="/balconytip" component={BalconyTip}></Route>
          <Route path="/rec" component={Recommend}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/personalcenter" component={PersonalCenter}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/des/:t" component={Designsort}></Route>
          <Route path='/create' component={CreatePage}></Route>
          <Route path="/designer" component={DesingnerPage}></Route>
          <Route path="/highquality" component={Rec}></Route>
          </Switch>
        </Router>
      
    </div>
  )
}

export default App

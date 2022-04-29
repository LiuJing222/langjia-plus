import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import './PersonalSetting.css'
import set from './images/set.png'
import returnicon from './images/returnicon.png'
import PersonMessage from './PersonMessage'
import SetPassword from './SetPassword'
import ChangeEmail from './ChangeEmail'

const PersonalSetting = (props) => {
    console.log(props)
    var history = useHistory();
    useEffect(()=>{
        var nodelists = document.getElementsByClassName('personalcenter_setting_inside_nav')[0].childNodes;
        for (var i = 0; i < nodelists.length-1; i++) {
            nodelists[i].childNodes[0].style.color = "black";
        }
        if (history.location.pathname == '/personalcenter/setting/personmessage') {
            nodelists[0].childNodes[0].style.color = "rgb(2,43,99)";
            document.getElementsByClassName('personalcenter_setting_bottom_line')[0].style.left = '0px';
        } else if (history.location.pathname == '/personalcenter/setting/setpassword') {
            nodelists[1].childNodes[0].style.color = "rgb(2,43,99)";
            document.getElementsByClassName('personalcenter_setting_bottom_line')[0].style.left = '33.3%';
        } else {
            nodelists[2].childNodes[0].style.color = "rgb(2,43,99)";
            document.getElementsByClassName('personalcenter_setting_bottom_line')[0].style.left = '66.6%';
        }
    })
    return (
        <div className="personalcenter_setting_inner_box">
            <div className="personalcenter_setting_inside">
                <div className="personalcenter_setting_inside_title">
                    <div>
                        <img src={set} />
                        <div>设置</div>
                    </div>
                    <Link to="/personalcenter"><img src={returnicon} /></Link>
                </div>
                <div className="personalcenter_setting_inside_nav">
                    <div><Link to="/personalcenter/setting/personmessage">个人信息</Link></div>
                    <div><Link to="/personalcenter/setting/setpassword">修改密码</Link></div>
                    <div><Link to="/personalcenter/setting/changeemail">更换邮箱</Link></div>
                    <span className="personalcenter_setting_bottom_line"></span>
                </div>   
                <div className="personalcenter_setting_borderline"></div>
                
                <div className="personalcenter_setting_inside_content">
                    <Switch>
                        <Route path="/personalcenter/setting/personmessage" component={PersonMessage}></Route>
                        <Route path="/personalcenter/setting/setpassword" component={SetPassword}></Route>
                        <Route path="/personalcenter/setting/changeemail" component={ChangeEmail}></Route>
                        <Redirect from="/personalcenter/setting" to="/personalcenter/setting/personmessage"></Redirect>
                    </Switch>
                </div> 
            </div>
        </div>
    )
}

export default PersonalSetting

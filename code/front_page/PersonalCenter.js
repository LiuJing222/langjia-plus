import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, Link,NavLink } from 'react-router-dom';
import { useHistory } from 'react-router'
import './PersonalCenter.css'
import logo from './images/bluetlogo.png'
import text1 from './images/text.png'
import set from './images/set.png'
import defaultimg from './images/tree.png'

import PersonalLikes from './PersonalLikes'
import PersonalDesigns from './PersonalDesigns'
import PersonalCollects from './PersonalCollects'
import PersonalSetting from './PersonalSetting'
import HomeBelong from './HomeBelong'

const PersonalCenter = () => {
    const [message, setMessage] = useState({})
    const [collectList, setCollectList] = useState({});
    const [designList, setDesignList] = useState({});
    const [recom, setRecom] = useState(0);

    const history = useHistory();
    const pathname = history.location.pathname;

    useEffect(() => {
        //var email = '2505469033@qq.com';
        var email = localStorage.getItem('email');
        fetch('https://api.qasdwer.xyz:2019/isLogin/' + email)
            .then(res => res.json())
            .then(res => {
                //console.log(res.user_head_portrait)
                setMessage(res);
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/getcollection/' + email)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCollectList(res);
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {
                var newList = res.filter(item => item.user_id === email)
                console.log(newList)
                setDesignList(newList);
                newList.map((item) => {
                    if (item.is_recom != 0) {
                        setRecom(recom + 1);
                    }
                })
            })
            .catch(err => console.log(err.message));
    }, [])
    useEffect(() => {
        var nodelists = document.getElementsByClassName('personalcenter_nav')[0].childNodes;
        for (var i = 0; i < nodelists.length; i++) {
            nodelists[i].style.backgroundColor = "rgb(2,43,99)";
            nodelists[i].childNodes[0].style.color = "white";
            nodelists[i].childNodes[0].style.fontWeight = "normal";
        }
        if (history.location.pathname == '/personalcenter/collects') {
            nodelists[0].style.backgroundColor = "white";
            nodelists[0].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[0].childNodes[0].style.fontWeight = "bold";
        } else if (history.location.pathname == '/personalcenter/likes') {
            nodelists[1].style.backgroundColor = "white";
            nodelists[1].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[1].childNodes[0].style.fontWeight = "bold";
        } else {
            nodelists[2].style.backgroundColor = "white";
            nodelists[2].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[2].childNodes[0].style.fontWeight = "bold";
        }
    })
    const Changstyle = (e) => {
        console.log(e.target.parentElement.parentElement.childNodes);
        for (var i = 0; i < e.target.parentElement.parentElement.childNodes.length; i++) {
            e.target.parentElement.parentElement.childNodes[i].style.backgroundColor = "rgb(2,43,99)";
            e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.color = "white";
            e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.fontWeight = "normal";
        }
        e.target.parentElement.style.backgroundColor = "white";
        e.target.style.color = "rgb(2,43,99)";
        e.target.style.fontWeight = "bold";
    }
    const ExitProcess = ()=>{
        localStorage.removeItem('email');
        history.push('/');
    }
    return (
        <div className="personalcenter_box">
            <div class="home_header" style={{backgroundColor:'white'}}>
                <NavLink to='/'><img src={logo} className="home_logo" /></NavLink>
                <NavLink to='/home' ><div className="home_nav_logo">朗家</div></NavLink>
                <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                    <span>首页</span></NavLink>
                <NavLink to='/rec' className={pathname == "/rec" ? "home_head_active" : "home_nav_item"}>
                    <span>推荐</span></NavLink>
                <NavLink to='/Ins' className={pathname == "/Ins" ? "home_head_active" : "home_nav_item"} >
                    <span>灵感</span></NavLink>
                <NavLink to='/help' className={pathname == "/help" ? "home_head_active" : "home_nav_item"} >
                    <span>帮助中心</span></NavLink>
            </div>
            <div className="logout" onClick={()=>ExitProcess()}><span>退出登录</span></div>
            <div className="personalcenter_titleinside">
                <div>
                    <img src={text1} />
                    <div>打造我的专属style</div>
                </div>
                <Link to={{ pathname: '/personalcenter/setting', state: "message" }}><img src={set} />设置</Link>
            </div>
            <div className="personalcenter_data">
                <div className="personalcenter_header">
                    <div><img src={message.user_head_portrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + message.user_head_portrait : defaultimg} alt="头像" /></div>
                    <div>
                        <div>{message.user_name}</div>
                        <div>{designList.length < 10 ? '新手小白' : designList.length < 30 ? '贡献者' : designList.length < 50 ? '设计家' : '设计师'}<span className="personalcenter_header_hidden_tip">发布的设计越多等级越高喔㋡</span></div>
                        <div>{message.user_introduction}</div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="personalcenter_data_left_box">
                            <div>设计方案</div>
                            <div>累计排名233名</div>
                        </div>
                        <div className="personalcenter_data_right_box">{designList.length}</div>
                    </li>
                    <li>
                        <div className="personalcenter_data_left_box">
                            <div>优秀方案</div>
                            <div>累计排名403名</div>
                        </div>
                        <div className="personalcenter_data_right_box">{recom != 0 ? recom : '--'}</div>
                    </li>
                    <li>
                        <div className="personalcenter_data_left_box">
                            <div>我的灵感</div>
                            <div>累计排名221名</div>
                        </div>
                        <div className="personalcenter_data_right_box">{collectList.length}</div>
                    </li>
                    <li>
                        <div className="personalcenter_data_left_box">
                            <div>周访问量</div>
                            <div>累计排名23名</div>
                        </div>
                        <div className="personalcenter_data_right_box">11</div>
                    </li>
                </ul>
            </div>
            <div className="personalcenter_content">
                <div className="personalcenter_content_insidebox">
                    <div className="personalcenter_nav">
                        <div><Link to="/personalcenter/collects" onClick={(e) => Changstyle(e)} className="personalcenter_title">我的收藏</Link></div>
                        <div><Link to="/personalcenter/likes" onClick={(e) => Changstyle(e)} className="personalcenter_myCollect">我的点赞</Link></div>
                        <div><Link to="/personalcenter/designs" onClick={(e) => Changstyle(e)} className="personalcenter_myCollect">我的设计</Link></div>
                    </div>
                    <div className="personalcenter_collect_overline"></div>
                    <div>
                        <Switch>
                            <Route path="/personalcenter/collects" component={PersonalCollects}></Route>
                            <Route path="/personalcenter/likes" component={PersonalLikes}></Route>
                            <Route path="/personalcenter/designs" component={PersonalDesigns}></Route>
                            <Redirect exact from="/personalcenter" to="/personalcenter/collects"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
            <HomeBelong/>
            <div className="personalcenter_setting_box">
                <Switch>
                    <Route path="/personalcenter/setting" component={PersonalSetting}></Route>
                    <Redirect from="/personalcenter" to="/personalcenter/collects"></Redirect>
                </Switch>
            </div>
        </div>
    )
}

export default PersonalCenter

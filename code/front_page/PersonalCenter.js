import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router'
import './PersonalCenter.css'
import logo from './images/bluetlogo.png'
import text1 from './images/text.png'
import set from './images/set.png'
import defaultimg from './images/tree.png'
import gold from './images/金牌.png'
import silver from './images/银牌.png'
import bronze from './images/铜牌.png'



import PersonalLikes from './PersonalLikes'
import PersonalDesigns from './PersonalDesigns'
import PersonalCollects from './PersonalCollects'
import PersonalSetting from './PersonalSetting'
import HomeBelong from './HomeBelong'

const PersonalCenter = () => {
    const [message, setMessage] = useState({});
    const [designRanking, setDesignRanking] = useState(0);
    const [inspireRanking, setInspireRanking] = useState(0);
    const [collectList, setCollectList] = useState({});
    const [designList, setDesignList] = useState({});
    const [recom, setRecom] = useState(0);
    const [following, setFollowing] = useState([]);
    const [followed, setFollowed] = useState([]);
    const [userList, setUserList] = useState([]);

    const history = useHistory();
    const pathname = history.location.pathname;

    var email = localStorage.getItem('email');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/isLogin/' + email)
            .then(res => res.json())
            .then(res => {
                setMessage(res);
                if (res.following != '') {
                    const num = JSON.parse(res.following);
                    setFollowing(num);
                }
                if (res.followed != '') {
                    const num = JSON.parse(res.followed);
                    setFollowed(num);
                }
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {
                const data1 = res.sort((a, b) => {
                    return a.design_number > b.design_number ? -1 : 1;
                })
                for (var i = 0; i < data1.length; i++) {
                    if (data1[i].user_id == email) {
                        setDesignRanking(i + 1)
                    }
                }
                const data2 = res.sort((a, b) => {
                    return a.inspire_number > b.inspire_number ? -1 : 1;
                })
                for (var i = 0; i < data2.length; i++) {
                    if (data2[i].user_id == email) {
                        setInspireRanking(i + 1)
                    }
                }
                setUserList(res);
            })
        fetch('https://api.qasdwer.xyz:2019/getcollection/' + email)
            .then(res => res.json())
            .then(res => {
                setCollectList(res);
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {
                var newList = res.filter(item => item.user_id === email)
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
        for (var i = 0; i < e.target.parentElement.parentElement.childNodes.length; i++) {
            e.target.parentElement.parentElement.childNodes[i].style.backgroundColor = "rgb(2,43,99)";
            e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.color = "white";
            e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.fontWeight = "normal";
        }
        e.target.parentElement.style.backgroundColor = "white";
        e.target.style.color = "rgb(2,43,99)";
        e.target.style.fontWeight = "bold";
    }
    const ExitProcess = () => {
        var isStop = window.confirm(`确认退出`);
        if (isStop) {
            localStorage.removeItem('email');
            history.push('/');
        }
    }
    const toContent = () => {
        document.getElementsByClassName('personalcenter_nav')[0].scrollIntoView({ behavior: 'smooth', block: "start" });
    }
    const toFollow = () => {
        document.getElementsByClassName('personalcenter_follow')[0].scrollIntoView({ behavior: 'smooth', block: "start" });
    }

    const ChangeList = (e, i) => {
        const parent = e.target.parentElement;
        for (var j = 0; j < parent.childNodes.length; j++) {
            parent.childNodes[j].style.backgroundColor = 'white';
        }
        e.target.style.backgroundColor = 'rgba(2,43,99,0.5)';

        const list = e.target.parentElement.parentElement.childNodes[1].childNodes;
        for (var p = 0; p < list.length; p++) {
            list[p].style.display = 'none';
        }
        list[i - 1].style.display = 'block';

    }
    const StopFollowing = (item) => {
        var isStop = window.confirm(`确定取消对 ${item.user_name} 的关注吗？`);
        if (isStop) {
            fetch('https://api.qasdwer.xyz:2019/cancelfollowing/' + email + '/' + item.user_id)
                .then(res => {
                    window.location.reload();
                })
        }
    }
    const StopFollowed = (item) => {
        var isStop = window.confirm(`确定移除粉丝 ${item.user_name} 吗？`);
        if (isStop) {
            fetch('https://api.qasdwer.xyz:2019/cancelfollowing/' + item.user_id + '/' + email)
                .then(res => {
                    window.location.reload();
                })
        }
    }
    return (
        <div className="personalcenter_box">
            <div className="home_header" style={{ backgroundColor: 'white' }}>
                <NavLink to='/'><img src={logo} className="home_logo" /></NavLink>
                <NavLink to='/home' ><div className="home_nav_logo">朗家</div></NavLink>
                <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                    <span>首页</span></NavLink>
                <NavLink to='/rec' className={pathname == "/rec" ? "home_head_active" : "home_nav_item"}>
                    <span>推荐</span></NavLink>
                <NavLink to='/Ins' className={pathname == "/Ins" ? "home_head_active" : "home_nav_item"} >
                    <span>灵感</span></NavLink>
                <NavLink to='/res' className={pathname == "/res" ? "home_head_active" : "home_nav_item"} >
                    <span>大咖秀</span></NavLink>
                <NavLink to='/help' className={pathname == "/help" ? "home_head_active" : "home_nav_item"} >
                    <span>帮助中心</span></NavLink>
            </div>
            <div className="logout" onClick={() => ExitProcess()}><span>退出登录</span></div>
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
                    <li onClick={() => toContent()}>
                        <div className="personalcenter_data_left_box">
                            <div>设计方案</div>
                            <div>累计排名第{designRanking}名{designRanking == 1 ? <img src={gold} /> : designRanking == 2 ? <img src={silver} /> : designRanking == 3 ? <img src={bronze} /> : ''}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{message.design_number}</div>
                    </li>
                    <li onClick={() => toContent()}>
                        <div className="personalcenter_data_left_box" >
                            <div>优秀方案</div>
                            <div>感谢你的优秀设计</div>
                        </div>
                        <div className="personalcenter_data_right_box">{recom != 0 ? recom : '--'}</div>
                    </li>
                    <li onClick={() => toContent()}>
                        <div className="personalcenter_data_left_box">
                            <div>我的灵感</div>
                            <div>累计排名第{inspireRanking}名{inspireRanking == 1 ? <img src={gold} /> : inspireRanking == 2 ? <img src={silver} /> : inspireRanking == 3 ? <img src={bronze} /> : ''}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{message.inspire_number == 0 ? '--' : message.inspire_number}</div>
                    </li>
                    <li onClick={() => toFollow()}>
                        <div className="personalcenter_data_left_box">
                            <div>我的关注</div>
                            <div>{message.following == '' ? <Link to='/Ins'>发现优质作者=></Link> : '跟着大佬走不会错的'}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{following.length == 0 ? '--' : following.length}</div>
                    </li>
                    <li onClick={() => toFollow()}>
                        <div className="personalcenter_data_left_box">
                            <div>我的粉丝</div>
                            <div>{message.following == '' ? <Link to='/home'>优秀的作品吸引更多的小伙伴=></Link> : '没错大佬就是我'}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{followed.length == 0 ? '--' : followed.length}</div>
                    </li>
                </ul>
            </div>
            <div className="personalcenter_content">
                <div className="personalcenter_content_insidebox">
                    <div className="personalcenter_nav">
                        <div><Link to="/personalcenter/collects" onClick={(e) => Changstyle(e)} className="personalcenter_title">灵感收藏</Link></div>
                        <div><Link to="/personalcenter/likes" onClick={(e) => Changstyle(e)} className="personalcenter_myCollect">设计点赞</Link></div>
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
            <div className="personalcenter_follow">
                <div className="personalcenter_follow_title">
                    <div></div>
                    {/* <div><img src={}/></div> */}
                    <div></div>
                </div>
                <div className="personalcenter_follow_box">
                    <div className="personalcenter_follow_beside">
                        <div className="personalcenter_following" onClick={(e) => ChangeList(e, 1)}>我的关注</div>
                        <div className="personalcenter_followed" onClick={(e) => ChangeList(e, 2)}>我的粉丝</div>
                        <div className="personalcenter_follow_message" onClick={(e) => ChangeList(e, 3)}>我的消息</div>
                    </div>
                    <div className="personalcenter_follow_content">
                        <div className="personalcenter_following_box">
                            <div className="personalcenter_follow_box_title">全部关注</div>
                            {
                                following.map(item => {
                                    for (var i = 0; i < userList.length; i++) {
                                        if (item == userList[i].user_id) {
                                            return <Link to={{ pathname: '/designer', search: userList[i].user_id }} target='_blank' className="personalcenter_follow_user" key={userList[i].user_id}>
                                                <div className="personalcenter_follow_headimg"><img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userList[i].user_head_portrait} /></div>
                                                <div className="personalcenter_follow_intro">
                                                    <div>{userList[i].user_name}</div>
                                                    <div>{userList[i].user_introduction}</div>
                                                </div>
                                                <div className="personalcenter_follow_cancel" onClick={() => StopFollowing(userList[i])}>取消关注</div>
                                            </Link>
                                        }
                                    }
                                })
                            }
                        </div>
                        <div className="personalcenter_followed_box">
                            <div className="personalcenter_follow_box_title">全部粉丝</div>
                            {
                                followed.map(item => {
                                    for (var i = 0; i < userList.length; i++) {
                                        if (item == userList[i].user_id) {
                                            return <Link to={{ pathname: '/designer', search: userList[i].user_id }} target='_blank' className="personalcenter_follow_user" key={userList[i].user_id}>
                                                <div className="personalcenter_follow_headimg"><img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userList[i].user_head_portrait} /></div>
                                                <div className="personalcenter_follow_intro">
                                                    <div>{userList[i].user_name}</div>
                                                    <div>{userList[i].user_introduction}</div>
                                                </div>
                                                <div className="personalcenter_follow_cancel" onClick={() => StopFollowed(userList[i])}>移除</div>
                                            </Link>
                                        }
                                    }
                                })
                            }
                        </div>
                        <div className="personalcenter_message_box">
                            <div className="personalcenter_follow_box_title">全部消息</div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeBelong />
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

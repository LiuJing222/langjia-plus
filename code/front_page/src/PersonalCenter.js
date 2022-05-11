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
import ReactPlayer from 'react-player'
import nothing from './images/nothing.png'
import followedimg from './images/followed.png'
import followingimg from './images/following.png'
import messageimg from './images/message.png'
import exit from './images/exit.png'
import back from './images/back.jpg'

import PersonalLikes from './PersonalLikes'
import PersonalDesigns from './PersonalDesigns'
import PersonalCollects from './PersonalCollects'
import PersonalSetting from './PersonalSetting'
import HomeBelong from './HomeBelong'

const PersonalCenter = () => {
    const [message, setMessage] = useState({});
    const [designRanking, setDesignRanking] = useState(0);
    const [inspireRanking, setInspireRanking] = useState(0);
    const [collectList, setCollectList] = useState([]);
    const [designList, setDesignList] = useState([]);
    const [recom, setRecom] = useState(0);
    const [following, setFollowing] = useState([]);
    const [followed, setFollowed] = useState([]);
    const [userList, setUserList] = useState([]);
    const [adminList, setAdminList] = useState([]);
    const [totalNumber, setTotalNumber] = useState(0);

    const history = useHistory();
    const pathname = history.location.pathname;

    var email = localStorage.getItem('email');
    var count = 0;

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
        fetch('https://api.qasdwer.xyz:2019/getuserdesign/' + email)
            .then(res => res.json())
            .then(res => {
                var newList = res.filter(item => item.user_id === email)
                setDesignList(newList);
                var number = 0;
                newList.map(item => {
                    number += item.praise_quantity;
                })
                setTotalNumber(number);
                var recomnum = newList.filter(item => item.is_recom === 1);
                setRecom(recomnum.length);
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/admindata')
            .then(res => res.json())
            .then(res => {
                setAdminList(res)
            })
    }, []);
    useEffect(() => {
        var nodelists = document.getElementsByClassName('personalcenter_nav')[0].childNodes;
        for (var i = 0; i < nodelists.length; i++) {
            nodelists[i].style.backgroundColor = "rgb(2,43,99)";
            nodelists[i].childNodes[0].style.color = "white";
            nodelists[i].childNodes[0].style.fontWeight = "normal";
        }
        if (history.location.pathname == '/personalcenter/collects') {
            nodelists[1].style.backgroundColor = "white";
            nodelists[1].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[1].childNodes[0].style.fontWeight = "bold";
        } else if (history.location.pathname == '/personalcenter/likes') {
            nodelists[2].style.backgroundColor = "white";
            nodelists[2].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[2].childNodes[0].style.fontWeight = "bold";
        } else if (history.location.pathname == '/personalcenter/designs') {
            nodelists[3].style.backgroundColor = "white";
            nodelists[3].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[3].childNodes[0].style.fontWeight = "bold";
        } else {
            nodelists[0].style.backgroundColor = "white";
            nodelists[0].childNodes[0].style.color = "rgb(2,43,99)";
            nodelists[0].childNodes[0].style.fontWeight = "bold";
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
        <div className="personalcenter_box" style={{ backgroundImage: `url(${back})` }}>
            <div className="home_header" style={{ backgroundColor: 'white' }}>
                <NavLink to='/'><img src={logo} className="home_logo" /></NavLink>
                <NavLink to='/home' ><div className="home_nav_logo">朗家</div></NavLink>
                <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                    <span>首页</span></NavLink>
                <NavLink to='/highquality' className={pathname == "/highquality" ? "home_head_active" : "home_nav_item"}>
                    <span>推荐</span></NavLink>
                <NavLink to='/Ins' className={pathname == "/Ins" ? "home_head_active" : "home_nav_item"} >
                    <span>灵感</span></NavLink>
                <NavLink to='/rec' className={pathname == "/rec" ? "home_head_active" : "home_nav_item"} >
                    <span>大咖秀</span></NavLink>
                <NavLink to='/help' className={pathname == "/help" ? "home_head_active" : "home_nav_item"} >
                    <span>帮助中心</span></NavLink>
            </div>
            <div className="logout" onClick={() => ExitProcess()}><img src={exit} /><span className="exit_message">退出登录</span></div>
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
                    <li onClick={() => toContent()}><Link to='/personalcenter/designs'>
                        <div className="personalcenter_data_left_box">
                            <div>设计方案</div>
                            <div>累计排名第{designRanking}名{designRanking == 1 ? <img src={gold} /> : designRanking == 2 ? <img src={silver} /> : designRanking == 3 ? <img src={bronze} /> : ''}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{message.design_number}</div>
                    </Link>
                    </li>
                    <li onClick={() => toContent()}><Link to='/personalcenter/designs'>
                        <div className="personalcenter_data_left_box" >
                            <div>优秀方案</div>
                            <div>您的总获赞量为 {totalNumber}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{recom != 0 ? recom : '--'}</div>
                    </Link>
                    </li>
                    {
                        adminList.map(item => {
                            if (item.admin_email === email) {
                                return <li key={item.admin_email}><Link target='_blank' to={{ pathname: '/designer', search: JSON.stringify(email) }}>
                                    <div className="personalcenter_data_left_box">
                                        <div>我的灵感</div>
                                        <div>累计排名第{inspireRanking}名{inspireRanking == 1 ? <img src={gold} /> : inspireRanking == 2 ? <img src={silver} /> : inspireRanking == 3 ? <img src={bronze} /> : ''}</div>
                                    </div>
                                    <div className="personalcenter_data_right_box">{message.inspire_number == 0 ? '--' : message.inspire_number}</div>
                                </Link>
                                </li>
                            }
                            count++;
                        })
                    }
                    {
                        count === adminList.length?<li onClick={() => toContent()}><Link to="/personalcenter/collects">
                            <div className="personalcenter_data_left_box">
                                <div>灵感收藏</div>
                                <div>积少成多，好作品都是攒出来的</div>
                            </div>
                            <div className="personalcenter_data_right_box">{collectList.length}</div>
                        </Link>
                        </li>:''

                    }

                    <li onClick={() => toFollow()}><Link to='/personalcenter'>
                        <div className="personalcenter_data_left_box">
                            <div>我的关注</div>
                            <div>{message.following == '' ? <Link to='/Ins'>发现优质作者=></Link> : '跟着大佬走不会错的'}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{following.length == 0 ? '--' : following.length}</div>
                    </Link>
                    </li>
                    <li onClick={() => toFollow()}><Link to='/personalcenter'>
                        <div className="personalcenter_data_left_box">
                            <div>我的粉丝</div>
                            <div>{message.following == '' ? <Link to='/home'>优秀的作品吸引更多的小伙伴=></Link> : '没错大佬就是我'}</div>
                        </div>
                        <div className="personalcenter_data_right_box">{followed.length == 0 ? '--' : followed.length}</div>
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="personalcenter_content">
                <div className="personalcenter_content_insidebox">
                    <div className="personalcenter_nav">
                        <div><Link to="/personalcenter" onClick={(e) => Changstyle(e)}>朗家</Link></div>
                        <div><Link to={{
                            pathname: '/personalcenter/collects',
                            state: { userlist: userList, collectlist: collectList }
                        }} onClick={(e) => Changstyle(e)} className="personalcenter_title">灵感收藏</Link></div>
                        <div><Link to={{
                            pathname: "/personalcenter/likes",
                            state: { userlist: userList, designList: designList }
                        }} onClick={(e) => Changstyle(e)} className="personalcenter_myCollect">设计点赞</Link></div>
                        <div><Link to="/personalcenter/designs" onClick={(e) => Changstyle(e)} className="personalcenter_myCollect">我的设计</Link></div>
                    </div>
                    <div className="personalcenter_collect_overline"></div>
                    <div>
                        {history.location.pathname === '/personalcenter' ?
                            <div>
                                <ReactPlayer
                                    url={collectList[parseInt(Math.random() * (collectList.length))] ? collectList[parseInt(Math.random() * (collectList.length))].vedio : 'http://user-platform-oss.kujiale.com/design/video/perm/MIUGZJYKTEFXCAABAAAAADQ8.mp4'}
                                    playing={true}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    width='100%'
                                    height='100%'
                                />
                            </div> :
                            <Switch>
                                <Route path="/personalcenter/collects" component={PersonalCollects}></Route>
                                <Route path="/personalcenter/likes" component={PersonalLikes}></Route>
                                <Route path="/personalcenter/designs" component={PersonalDesigns}></Route>
                            </Switch>
                        }
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
                        <div className="personalcenter_following" onClick={(e) => ChangeList(e, 1)}><img src={followingimg} alt="following" />我的关注</div>
                        <div className="personalcenter_followed" onClick={(e) => ChangeList(e, 2)}><img src={followedimg} alt="followed" />我的粉丝</div>
                        <div className="personalcenter_follow_message" onClick={(e) => ChangeList(e, 3)}><img src={messageimg} alt="message" />我的消息</div>
                    </div>
                    <div className="personalcenter_follow_content">
                        <div className="personalcenter_following_box">
                            <div className="personalcenter_follow_box_title">全部关注</div>
                            {
                                following.length !== 0 ?
                                    following.map(item => {
                                        for (var i = 0; i < userList.length; i++) {
                                            if (item == userList[i].user_id) {
                                                return <div className="personalcenter_follow_user_outside" key={userList[i].user_id}><Link to={{ pathname: '/designer', search: JSON.stringify(userList[i].user_id) }} target='_blank' className="personalcenter_follow_user" >
                                                    <div className="personalcenter_follow_headimg"><img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userList[i].user_head_portrait} /></div>
                                                    <div className="personalcenter_follow_intro">
                                                        <div>{userList[i].user_name}</div>
                                                        <div>{userList[i].user_introduction}</div>
                                                    </div>
                                                </Link>
                                                    <div className="personalcenter_follow_cancel" onClick={() => StopFollowing(userList[i])}>取消关注</div>
                                                </div>
                                            }
                                        }
                                    })
                                    :
                                    <div className="blank_follow" style={{ backgroundImage: `url(${nothing})` }}>
                                        <div>您还没有关注哦</div>
                                    </div>
                            }
                        </div>
                        <div className="personalcenter_followed_box">
                            <div className="personalcenter_follow_box_title">全部粉丝</div>
                            {
                                followed.length !== 0 ?
                                    followed.map(item => {
                                        for (var i = 0; i < userList.length; i++) {
                                            if (item == userList[i].user_id) {
                                                return <div className="personalcenter_follow_user_outside"><Link to={{ pathname: '/designer', search: JSON.stringify(userList[i].user_id) }} target='_blank' className="personalcenter_follow_user" key={userList[i].user_id}>
                                                    <div className="personalcenter_follow_headimg"><img src={'https://api.qasdwer.xyz:2019/headPortrait/' + userList[i].user_head_portrait} /></div>
                                                    <div className="personalcenter_follow_intro">
                                                        <div>{userList[i].user_name}</div>
                                                        <div>{userList[i].user_introduction}</div>
                                                    </div>
                                                </Link><div className="personalcenter_follow_cancel" onClick={() => StopFollowed(userList[i])}>移除</div></div>
                                            }
                                        }
                                    }) :
                                    <div className="blank_follow" style={{ backgroundImage: `url(${nothing})` }}>
                                        <div>您还没有关注哦</div>
                                    </div>
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
                </Switch>
            </div>
        </div>
    )
}

export default PersonalCenter

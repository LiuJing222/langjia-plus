import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import defaultimg from './images/tree.png'
import './HomeHeader.css'
import HomeLogo from './images/bluetlogo.png'


const HomeHeader = () => {
    const [pathname, setPathname] = useState("")
    const [msg, setMsg] = useState({})

    var email = localStorage.getItem('email');
    useEffect(() => {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        setPathname(pathname)

        fetch('https://api.qasdwer.xyz:2019/isLogin/' + email)
            .then(res => res.json())
            .then(res => {
                // console.log(res.user_head_portrait)
                setMsg(res)
            })
            .catch(err => console.log(err.message))

        var portrait = document.getElementById("home_header_user_head_portrait")
        var portrait_hover = document.getElementById("home_header_user_portrait_hover")
        portrait.addEventListener("mouseover",(e)=>{
            portrait_hover.style.display = "flex"
        })
        portrait.addEventListener("mouseleave",(e)=>{
            portrait_hover.style.display = "none"
        })
        portrait_hover.addEventListener("mouseover",(e)=>{
            portrait_hover.style.display = "flex"
        })
        portrait_hover.addEventListener("mouseleave",(e)=>{
            portrait_hover.style.display = "none"
        })
    }, [])
    return (
        <div className="home_header">
            <NavLink to='/'><img src={HomeLogo} className="home_logo" /></NavLink>
            <NavLink to='/home' ><div className="home_nav_logo">朗家</div></NavLink>
            <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                <span>首页</span></NavLink>
            <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                <span>推荐</span></NavLink>
            <NavLink to='/Ins' className={pathname == "/Ins" ? "home_head_active" : "home_nav_item"} >
                <span>灵感</span></NavLink>
            <NavLink to='/rec' className={pathname == "/rec" ? "home_head_active" : "home_nav_item"}>
                <span>大咖秀</span></NavLink>
            <NavLink to='/help' className={pathname == "/help" ? "home_head_active" : "home_nav_item"} >
                <span>帮助中心</span></NavLink>
            {
                localStorage.getItem("email") ?
                    <Link to="/personalcenter"
                        className={pathname == "/personalcenter" ? "home_head_active" : "home_nav_item"}
                        style={{ marginLeft: '500px' }}>
                        <img id='home_header_user_head_portrait'
                            src={msg.user_head_portrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + msg.user_head_portrait : defaultimg} alt="头像"
                            // onMouseOver={(e)=>{portrait.style.display = "dispay"}}
                            // onMouseLeave={}
                            >
                        </img>
                        <Link to="/create" className="home_header_start"><span>开始设计</span></Link>
                    </Link>
                    : <Link to="/login"><div className="home_nav_item" style={{ marginLeft: '500px' }}><span>登录|注册</span></div></Link>
            }
            <div id="home_header_user_portrait_hover">
                <p style={{fontWeight:"600"}}>昵称：{msg.user_name}</p>
                <Link to="/personalcenter/collects" className="home_header_user_portrait_hover_span"><span>我的收藏</span></Link>
                <Link to="/personalcenter/likes" className="home_header_user_portrait_hover_span"><span>我的点赞</span></Link>
                <Link to="/personalcenter/designs" className="home_header_user_portrait_hover_span"><span>我的设计</span></Link>
            </div>
        </div>
    )
}
export default HomeHeader   
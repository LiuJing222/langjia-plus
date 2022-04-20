import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import './HomeHeader.css'
import HomeLogo from './images/bluetlogo.png'


const HomeHeader = () => {
    const [pathname, setPathname] = useState("")
    useEffect(() => {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        setPathname(pathname)
        // console.log(pathname);
    }, [])
    return (
        <div className="home_header">
            <NavLink to='/'><img src={HomeLogo} className="home_logo" /></NavLink>
            <NavLink to='/home' ><div className="home_nav_logo">朗家</div></NavLink>
            <NavLink to='/home' className={pathname == "/home" ? "home_head_active" : "home_nav_item"}>
                <span>首页</span></NavLink>
            <NavLink to='/rec' className={pathname == "/rec" ? "home_head_active" : "home_nav_item"}>
                <span>推荐</span></NavLink>
            <NavLink to='/Ins' className={pathname == "/Ins" ? "home_head_active" : "home_nav_item"} >
                <span>灵感</span></NavLink>
            <NavLink to='/help' className={pathname == "/help" ? "home_head_active" : "home_nav_item"} >
                <span>帮助中心</span></NavLink>
            {
                localStorage.getItem("email") ?
                    <Link to="personalcenter" className={pathname == "/personalcenter" ? "home_head_active" : "home_nav_item"} ><span>个人中心</span></Link>
                    : <Link to="/login"><div className="home_nav_item" style={{ marginLeft: '650px' }}><span>登录|注册</span></div></Link>
            }
        </div>
    )
}
export default HomeHeader
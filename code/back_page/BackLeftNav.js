import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./BackLeftNav.css"

const BackLeftNav = () => {
    const [pathname, setPathname] = useState("")
    useEffect(() => {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        // console.log(pathname)
        setPathname(pathname)
        var userdata = document.getElementById("userdata")
        var navlinks = document.getElementById("backuser_nav_navlinks")
        navlinks.style.left = "-150px"
        userdata.addEventListener("mouseover", (e) => {
            navlinks.style.left = "120px"
        })
        userdata.addEventListener("mouseleave", (e) => {
            navlinks.style.left = "-150px"
        })
        navlinks.addEventListener("mouseover", () => {
            navlinks.style.left = "120px"
        })
        navlinks.addEventListener("mouseleave", (e) => {
            navlinks.style.left = "-150px"
        })
    }, [])
    return (
        <div className='back_home_leftnav'>
            <Link to="/backusermanage"
                className={pathname === "/backusermanage" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            > <span>用户管理</span></Link>
            {/* 用户的信息 */}
            <Link to="/backmanagerdata"
                id="userdata"
                className={pathname === "/backuserdata" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            ><span>用户数据</span></Link>
            <div
                id="backuser_nav_navlinks"
                className='backuser_nav_navlinks'>
                <NavLink to="/backuser/ins" className="backuser_nav_navlink"><span>用户的灵感收藏</span></NavLink>
                <NavLink to="/backuser/good" className="backuser_nav_navlink"><span>用户的设计点赞</span></NavLink>
                <NavLink to="/backuser/design" className="backuser_nav_navlink"><span>用户的设计</span></NavLink>
            </div>
            {/* <NavLink to>用户的消息</NavLink> */}
            {/* 用户的设计 */}
            <Link to="/backinsmanage"
                className={pathname === "/backinsmanage" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            ><span>灵感管理</span></Link>
            {/* 增删 */}
            <Link  to="/backfurniture" className='back_home_leftnav_nav'><span>家具素材</span></Link>
            {/* 增删改 */}
            <Link className='back_home_leftnav_nav'><span>户型素材</span></Link>
            {/* 增删改 */}
            <Link to="/backmanagerdata"
                className={pathname === "/backmanagerdata" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            > 系统管理</Link>
        </div >
    )

}

export default BackLeftNav
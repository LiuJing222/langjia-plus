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
        
    }, [])
    return (
        <div className='back_home_leftnav'>
            <Link to="/backusermanage"
                className={pathname === "/backusermanage" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            > <span>用户管理</span></Link>
            {/* 用户的信息 */}
            <Link to="/backuser/design"
                id="userdata"
                className={pathname === "/backuser/design" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            ><span>用户设计</span></Link>
            
            {/* <NavLink to>用户的消息</NavLink> */}
            {/* 用户的设计 */}
            <Link to="/backinsmanage"
                className={pathname === "/backinsmanage" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            ><span>灵感管理</span></Link>
            {/* 增删 */}
            <Link to="/backfurniture" className={pathname === "/backfurniture" ?'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}><span>家具素材</span></Link>
            {/* 增删改 */}
            <Link to="/backhousetype" className={pathname === '/backhousetype'?'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}><span>户型素材</span></Link>
            {/* 增删改 */}
            <Link to="/backmanagerdata"
                className={pathname === "/backmanagerdata" ? 'back_home_leftnav_active_nav' : 'back_home_leftnav_nav'}
            > <span>系统管理</span></Link>
        </div >
    )

}

export default BackLeftNav
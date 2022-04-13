import React from 'react'
import {Link,NavLink} from 'react-router-dom';

import './HomeHeader.css'
import HomeLogo from './images/bluetlogo.png'

const HomeHeader = () => {

    return (
        <div class="home_header">
            {/* <img src={HomeLogo} className="home_logo"/> */}
            <NavLink to='/'><img src={HomeLogo}  className="home_logo"/></NavLink>
            <NavLink to='/home' exact activeClassName="home_head_active"><div className="home_nav_logo">朗家</div></NavLink>
            <NavLink to='/home' exact activeClassName="home_head_active"><div className="home_nav_item">首页</div></NavLink>
            <NavLink to='/e' activeClassName="home_head_active"><div className="home_nav_item">推荐</div></NavLink>  
            <NavLink to='/e' activeClassName="home_head_active"><div className="home_nav_item">灵感</div></NavLink>  
            <Link to="/login"><div className="home_nav_item" style={{marginLeft:'400px'}}>登录/注册</div></Link>

        </div>
    )
}

export default HomeHeader
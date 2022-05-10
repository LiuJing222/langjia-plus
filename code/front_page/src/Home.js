import React from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'
import './Home.css'

const Home = () => {
    // localStorage.setItem('tip',false);
    localStorage.setItem('dis2D',JSON.stringify({display:'none'}))
    localStorage.setItem('dis3D',JSON.stringify({display:'none'}))
    localStorage.setItem('disStart',JSON.stringify({display:'flex'}))
    return (
        <div className="home">
            <HomeHeader></HomeHeader>
            <HomeContent></HomeContent>
        </div>
    )
}

export default Home


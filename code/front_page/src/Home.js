import React from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <HomeHeader></HomeHeader>
            <HomeContent></HomeContent>
        </div>
    )
}

export default Home


import React from 'react'
import BackLeftNav from './BackLeftNav'
import "./BackUserData.css"
const BackUserData = () => {
    return (
        <div className='back_user_data'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='user_data_con'>
                BackUserData
            </div>
        </div>
    )
}

export default BackUserData
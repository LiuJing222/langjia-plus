import React from 'react'
import './Help.css'
import HomeHeader from './HomeHeader'
import bg from './images/helpbg.webp'

const Help = () => {
  return (
    <div className='help_box'>
        <HomeHeader></HomeHeader>
        <div className='help_search_box'>
            <dir className='help_search_txt'>欢迎来到朗家帮助中心</dir>
            <div className='help_search_inputbox'>
                <input type="text" placeholder='请输入关键字' className='help_search_input' />

            </div>
        </div>
    </div>
  )
}

export default Help
import React from 'react'
import BackLeftNav from './BackLeftNav'

import "./BackInsManage.css"
const BackInsManage = () => {
  return (
    <div className='back_ins_manage'>
      <div className='back_home_leftnav'>
        <BackLeftNav></BackLeftNav>
      </div>
      <div className="back_ins_manage_con">
        <h3>灵感管理</h3>
      </div>
    </div>
  )
}

export default BackInsManage
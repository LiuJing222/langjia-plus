import React, { useState, useEffect } from 'react'
import BackLeftNav from './BackLeftNav'
import AddIns from "./AddIns"

import "./BackInsManage.css"
const BackInsManage = () => {
  const [inss, setInss] = useState([])
  const [insDetail, setInsDetail] = useState({})
  const [addIns, setAddIns] = useState(false)

  useEffect(() => {
    var addIns = document.getElementById("back_addins")
    fetch('https://api.qasdwer.xyz:2019/inspiredatas')
      .then(res => res.json())
      .then(json => {
        json.sort(function (x, y) { return x.inspire_id - y.inspire_id });
        json && setInss(json)
        console.log(json[0])
      }).catch(err => {
        alert(err);
      })
  }, [])

  const getInsDetail = (token) => {
    setInsDetail(token)
    console.log(token)
  }
  const pushIns = () => {
    setAddIns(true)
  }
  return (
    <div className='back_ins_manage'>
      <div className='back_home_leftnav'>
        <BackLeftNav></BackLeftNav>
      </div>
      <div className="back_ins_manage_con">
        <h3>灵感管理</h3>
        <div className='add_ins_button' onClick={() => pushIns()}>添加灵感</div>
        <div className='back_ins_con'>
          <div className='ins_con'>
            <div className='ins_con_id' style={{ fontWeight: "bold" }}>灵感id</div>
            <div className='ins_con_title' style={{ fontWeight: "bold" }}>灵感标题</div>
            <div className='ins_con_type' style={{ fontWeight: "bold" }}>灵感类型</div>
            <div className='ins_con_tag' style={{ fontWeight: "bold" }}>灵感所带标签</div>
            <div className='ins_con_op' style={{ fontWeight: "bold" }}>操作</div>
          </div>
          {inss[0] ? inss.map(token => {
            return <div className='ins_con'>
              <div className='ins_con_id'>{token.inspire_id}</div>
              <div className='ins_con_title'>{token.title}</div>
              <div className='ins_con_type'>{token.type}</div>
              <div className='ins_con_tag'>{token.tag}</div>
              <div className='ins_con_op'>
                <button onClick={getInsDetail(token)}>详情</button>
                <button>删除</button>
              </div>
            </div>
          })
            : <div></div>}
          {insDetail.inspire_id ?
            <div className='ins_detail_mask'>
              <div className='ins_detail_con'>
                <span>{insDetail}</span>
                <button onClick={setInsDetail({})}>关闭</button>
              </div>
            </div>
            : <div></div>}
        </div>
      </div>
      {addIns ? <AddIns id="back_addins"></AddIns> : <div></div>}

    </div >
  )
}

export default BackInsManage
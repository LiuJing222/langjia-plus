import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Joinus from './images/joinus.png'
import './HomeBelong.css'
const HomeBelong = () => {
    const [flag, setFlag] = useState(false)
    const ShowJoinus = async () => {
        setFlag(true)
    }
    const CloseJoinus = async (e) => {
        setFlag(false)
    }
    return (
        <div className='home_belong'>
            <div className='home_belong_con'>
                <p className='home_belong_title'>借鉴网站</p>
                <a href="https://b.kujiale.com/?utm_source=baidu_pz&utm_medium=cpt" target="_blank">酷家乐</a>
                <a href="https://www.npmjs.com/" target="_blank">npm官网</a>
                <a href="https://huaban.com/follow" target="_blank">花瓣网</a>
            </div>
            <div className='home_belong_con'>
                <p className='home_belong_title'>关于</p>
                <Link to='/help'><p>帮助中心</p></Link>
                <a onClick={() => ShowJoinus()}>加入我们</a>
                {flag ?
                    <div id="joinus_mask" onClick={(e) => { CloseJoinus(e) }} >
                        <div id="joinus_con" onClick={(e) => { e.stopPropagation() }}>
                            <div className='joinus_titlebar'>
                                <span className='joinus_close' onClick={(e) => CloseJoinus(e)}>×</span>
                            </div>
                            <div className='joinus_content'>
                                <div className='joinus_con_text'>
                                    <span>诚挚欢迎您的加入</span>
                                    <span>您可以通过以下两种方式联系我们：</span>
                                    <span>联系电话：15176655211</span>
                                    <span>邮箱：2505469033@qq.com</span>
                                    <span>非常期待您的来电或致信哦☺</span>
                                </div>

                                <div className='home_con_icon'>
                                    <img src={Joinus} />

                                </div>
                            </div>
                        </div>
                    </div> :
                    <div></div>
                }
            </div>
            <div className='home_belong_con'>
                <p className='home_belong_title'>联系我们</p>
                <p>联系方式：2505469033@qq.com</p>
                <p>周一至周日：9:00-17:00</p>
                <p>营业执照</p>
            </div>
        </div>
    )
}
export default HomeBelong
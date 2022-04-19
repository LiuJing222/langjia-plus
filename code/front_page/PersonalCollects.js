import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PersonalCollects.css'
import blank from "./images/blank3.png"
import hand from './images/hand.gif'
import backline from './images/backline.jpg'

const PersonalCollects = () => {
    var num = 0;
    var [collectList, setCollectList] = useState([]);
    var email = localStorage.getItem('email');
    //var email = '2505469033@qq.com';
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getcollection/' + email)
            .then(res => res.json())
            .then(res => {
                setCollectList(res);
                console.log(res);
            })
            .catch(err => console.log(err.message));
    }, [])
    const Collect = (item) => {
        var isdel = window.confirm(`确定取消 ${item.title} 的收藏吗？`);
        var inspireid = item.inspire_id;
        if (isdel) {
            fetch('https://api.qasdwer.xyz:2019/addcollection/' + inspireid + '/' + email, {
                method: 'post',
            })
                .then(res => res.json())
                .then(res => {
                    if (res.message) {
                        alert(res.message)
                    } else {
                        var newlist = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].is_collect) {
                                newlist.push(res[i])
                            }
                        }
                        setCollectList(newlist);
                    }

                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="personalcenter_collect_box">
            {
                collectList.length == 0 ?
                    <div className="personalcenter_collect_blank_box" style={{ backgroundImage: `url(${blank})` }}>
                        <div>您还没有收藏的灵感，快去找灵感逛逛吧！</div>
                        <div><img src={hand} /></div>
                        <div><Link to="/">开启灵感之旅</Link></div>
                    </div>
                    :
                    <div className="personalcenter_collect_items_box" style={{ backgroundImage: `url(${backline})` }}>
                        {/* <div className="personalcenter_collect_middleline"></div> */}
                        {
                            collectList.map(item => <div className={num++ % 2 == 0 ? "personalcenter_collect_left_item" : "personalcenter_collect_right_item"} id={item.inspire_id}>
                                <img src={"https://api.qasdwer.xyz:2019/inspiredatas/image/" + JSON.parse(item.imgname)[0]} className="mycol_img" />
                                <span></span>
                                <div>
                                    <div>{item.title.length > 6 ? item.title.slice(0, 6) + '...' : item.title}</div>
                                    <div>2022-04-13</div>
                                    <div>作者：{item.title.length > 6 ? item.title.slice(0, 6) + '...' : item.title}</div>
                                    <div>{JSON.parse(item.content)[0].slice(0, 10) + '...'}</div>
                                    <div onClick={() => { Collect(item) }}>移除</div>
                                </div>

                            </div>)
                        }
                        <div class="blank"></div>
                    </div>
            }
        </div>
    )
}

export default PersonalCollects

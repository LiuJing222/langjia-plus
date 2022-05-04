import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PersonalLikes.css'
import blank from "./images/blank3.png"
import hand from './images/hand.gif'
import backline from './images/backline.jpg'

const PersonalLikes = (props) => {
    // const userlist = props.location.state.userlist;
    var num = 0;
    const [message, setMessage] = useState([]);
    var [collectList, setCollectList] = useState([]);
    var email = localStorage.getItem('email');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getuserdesign/' + email)
            .then(res => res.json())
            .then(res => {
                const arr = [];
                res.map((item) => {
                    if (item.is_favor) {
                        arr.push(item);
                    }
                })
                setCollectList(arr);
                
            })
            .catch(err => console.log(err.message));
        fetch('https://api.qasdwer.xyz:2019/')
            .then(res => res.json())
            .then(res => {
                setMessage(res);
            })
    }, []);

    const Collect = (item) => {
        var isdel = window.confirm(`确定取消 ${item.design_name} 的收藏吗？`);
        var designid = item.design_id;
        if (isdel) {
            fetch('https://api.qasdwer.xyz:2019/addfavordesign/' + designid + '/' + email, {
                method: 'post',
            })
                .then(res => res.json())
                .then(res => {
                    if (res.message) {
                        alert(res.message)
                    } else {
                        var newlist = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].is_favor) {
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
                        <div>您还没有点赞的设计，快去推荐逛逛吧！</div>
                        <div><img src={hand} /></div>
                        <div><Link to="/Ins">推荐</Link></div>
                    </div>
                    :
                    <div className="personalcenter_collect_items_box" style={{ backgroundImage: `url(${backline})` }}>
                        {
                            collectList.map(item => <div className={num++ % 2 == 0 ? "personalcenter_collect_left_item" : "personalcenter_collect_right_item"} key={item.design_id}>
                                <Link to={{ pathname: '/' }}><img src={item.imgpath} className="mycol_img" /></Link>
                                <span></span>
                                <div>
                                    <div>{item.design_name}</div>
                                    <div>{item.create_time}</div>
                                    <div>作者：{message.map((i) => { if (i.user_id == item.user_id) return i.user_name })}</div>
                                    <div></div>
                                    <div className="personalcenter_collect_removefavor" onClick={() => { Collect(item) }}>移除</div>
                                </div>

                            </div>)
                        }
                        <div className="blank"></div>
                    </div>
            }
        </div>
    )
}

export default PersonalLikes
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './PersonalDesigns.css'
import top from './images/personal_top.png'
import blank from "./images/blank3.png"
import hand from './images/hand.gif'
import praise_quantity from './images/praise_quantity.png'
import pen from './images/pen.png'

import { Dialog, Toast, } from 'antd-mobile'

const PersonalDesigns = () => {
    const [topList, setTopList] = useState([]);
    const [normalList, setNormalList] = useState([]);
    const [recomList, setRecomList] = useState([]);

    const history = useHistory();
    var email = localStorage.getItem('email');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getuserdesign/' + email)
            .then(res => res.json())
            .then(res => {
                var newList = res.filter(item => item.user_id === email)
                var topl = [];
                var underl = [];
                var recom = [];
                console.log(newList)
                newList.map(item => {
                    if (item.istopping) {
                        topl.push(item);
                    } else {
                        underl.push(item);
                    }
                    if (item.is_recom === 1) {
                        recom.push(item)
                    }
                })
                setRecomList(recom);
                setTopList(topl);
                setNormalList(underl);
            })
            .catch(err => console.log(err.message));
    }, [])
    const intomydesign = (item) => {
        const furn = JSON.parse(item.design_furniture);
        var arr = [];
        for (var i = 0; i < furn.length; i++) {
            var obj = {
                furniture_id: furn[i].furniture,
                position: furn[i].point,
                rotate: furn[i].rotate,
                size: furn[i].size,
                objname: furn[i].objname,
                mtlname: furn[i].mtlname,
                imgname: furn[i].imgname,
                type: furn[i].type,
            };
            arr.push(obj);
        }
        localStorage.setItem('furniture', JSON.stringify(arr));
        localStorage.setItem('points', item.design_point);
        localStorage.setItem('dis3D', '{"display":"flex"}');
        localStorage.setItem('dis2D', '{"display":"none"}');
        localStorage.setItem('disStart', '{"display":"none"}');
        localStorage.setItem('intro', true);
        history.push('/create');
    }
    const del = async (item) => {
        const result = await Dialog.confirm({
            content: `????????????${item.design_name}??????`,
        })
        if (result) {
            fetch('https://api.qasdwer.xyz:2019/deluserdesign/' + item.design_id + '/' + item.user_id)
                .then(res => res.json())
                .then(res => {
                    var topl = [];
                    var underl = [];
                    res.map(item => {
                        if (item.istopping) {
                            topl.push(item);
                        } else {
                            underl.push(item);
                        }
                    })
                    Toast.show({ content: '????????????', position: 'bottom' })
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    Toast.show({ content: '???????????????' + err, position: 'bottom' })
                })
        }
        else {
            Toast.show({ content: '?????????', position: 'bottom' })
        }
    }
    const cancelTop = async (item) => {
        const result = await Dialog.confirm({
            content: `???????????? ${item.design_name} ???????????????`,
        })
        if (result) {
            fetch('https://api.qasdwer.xyz:2019/settopping/' + item.design_id + '/' + item.user_id)
                .then(res => res.json())
                .then(res => {
                    var topl = [];
                    var underl = [];
                    res.map(item => {
                        if (item.istopping) {
                            topl.push(item);
                        } else {
                            underl.push(item);
                        }
                    })
                    Toast.show({ content: '???????????????', position: 'bottom' })
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    Toast.show({ content: '???????????????' + err, position: 'bottom' })
                })
        } else {
            Toast.show({ content: '?????????', position: 'bottom' })
        }
        // var isdel = window.confirm(`???????????? ${item.design_name} ???????????????`);
        // if (isdel) {
        //     fetch('https://api.qasdwer.xyz:2019/settopping/' + item.design_id + '/' + item.user_id)
        //         .then(res => res.json())
        //         .then(res => {
        //             var topl = [];
        //             var underl = [];
        //             res.map(item => {
        //                 if (item.istopping) {
        //                     topl.push(item);
        //                 } else {
        //                     underl.push(item);
        //                 }
        //             })
        //             setTopList(topl);
        //             setNormalList(underl);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // }
    }
    const toTop = async (item) => {
        const result = await Dialog.confirm({
            content: `????????? ${item.design_name} ???????????????`,
        })
        if (result) {
            fetch('https://api.qasdwer.xyz:2019/settopping/' + item.design_id + '/' + item.user_id)
                .then(res => res.json())
                .then(res => {
                    var topl = [];
                    var underl = [];
                    res.map(item => {
                        if (item.istopping) {
                            topl.push(item);
                        } else {
                            underl.push(item);
                        }
                    })
                    Toast.show({ content: '?????????', position: 'bottom' })
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    Toast.show({ content: '???????????????' + err, position: 'bottom' })
                })
        } else {
            Toast.show({ content: '?????????', position: 'bottom' })
        }
    }
    return (
        <div>
            {
                normalList.length == 0 && topList.length == 0 ?
                    <div className="personalcenter_collect_blank_box" style={{ backgroundImage: `url(${blank})` }}>
                        <div>????????????????????????????????????????????????</div>
                        <div><img src={hand} /></div>
                        <div><Link to="/create">?????????</Link></div>
                    </div>
                    :
                    <div className="personalcenter_design_box">
                        <div><Link to="/create" className="personalcenter_design_tocreate"><img src={pen} /><sapn className="toCreate">????????? >>></sapn></Link></div>
                        <div>
                            <p className="personalcenter_design_titles">????????????</p>
                            {
                                recomList.map(item => {
                                    return (
                                        <div key={item.design_id} className="personalcenter_design_top_item">
                                            <div><img src={item.imgpath} className="personalcenter_design_img" /></div>
                                            <div><img src={top} alt="" className="personalcenter_design_top_icon" /></div>
                                            <div className="personalcenter_design_top_insidebox">
                                                <div className="personalcenter_design_title">{item.design_name}</div>
                                                <div className="personalcenter_design_time">{item.create_time}</div>
                                                <div className="personalcenter_design_buttons">
                                                    <div className="personalcenter_design_edit" onClick={() => intomydesign(item)}>??????</div>
                                                    <div className="personalcenter_design_delete" onClick={() => del(item)}>??????</div>
                                                    <div className="praise_quantity"><img src={praise_quantity} />{item.praise_quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p className="personalcenter_design_titles">????????????</p>
                            {
                                topList.map(item => {
                                    return (
                                        <div key={item.design_id} className="personalcenter_design_top_item">
                                            <div><img src={item.imgpath} className="personalcenter_design_img" /></div>
                                            <div><img src={top} alt="" className="personalcenter_design_top_icon" /></div>
                                            <div className="personalcenter_design_top_insidebox">
                                                <div className="personalcenter_design_title">{item.design_name}</div>
                                                <div className="personalcenter_design_time">{item.create_time}</div>
                                                <div className="personalcenter_design_buttons">
                                                    <div className="personalcenter_design_edit" onClick={() => intomydesign(item)}>??????</div>
                                                    <div className="personalcenter_design_delete" onClick={() => del(item)}>??????</div>
                                                    <div className="personalcenter_design_cancel" onClick={() => cancelTop(item)}>????????????</div>
                                                    <div className="praise_quantity"><img src={praise_quantity} />{item.praise_quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p className="personalcenter_design_titles">??????</p>
                            {
                                normalList.map(item => {
                                    return (
                                        <div key={item.design_id} className="personalcenter_design_under_item">
                                            <div><img src={item.imgpath} className="personalcenter_design_img" /></div>
                                            <div className="personalcenter_design_under_insidebox">
                                                <div className="personalcenter_design_title">{item.design_name}</div>
                                                <div className="personalcenter_design_time">{item.create_time}</div>
                                                <div className="personalcenter_design_buttons">
                                                    <div className="personalcenter_design_edit" onClick={() => intomydesign(item)}>??????</div>
                                                    <div className="personalcenter_design_delete" onClick={() => del(item)}>??????</div>
                                                    <div className="personalcenter_design_cancel" onClick={() => toTop(item)}>??????</div>
                                                    <div className="praise_quantity"><img src={praise_quantity} />{item.praise_quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default PersonalDesigns


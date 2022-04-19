import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './PersonalDesigns.css'
import top from './images/personal_top.png'

const PersonalDesigns = () => {
    const [topList, setTopList] = useState([]);
    const [normalList, setNormalList] = useState([]);

    const history = useHistory();
    //var email = '2505469033@qq.com';
    var email = localStorage.getItem('email');
    useEffect(() => {
        fetch('https://api.qasdwer.xyz:2019/getuserdesign')
            .then(res => res.json())
            .then(res => {
                var newList = res.filter(item => item.user_id === email)
                console.log(newList);
                var topl = [];
                var underl = [];
                newList.map(item => {
                    console.log(item.design_id)
                    if (item.istopping) {
                        topl.push(item);
                    } else {
                        underl.push(item);
                    }
                })
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
                imgname: furn[i].imgname
            };
            arr.push(obj);
        }
        localStorage.setItem('furniture', JSON.stringify(arr));
        localStorage.setItem('points', item.design_point)
        history.push('/createpage');
    }
    const del = (item) => {
        var isdel = window.confirm(`确定删除${item.design_name}吗？`);
        if (isdel) {
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
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    const cancelTop = (item) => {
        var isdel = window.confirm(`确定取消 ${item.design_name} 的置顶吗？`);
        if (isdel) {
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
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    const toTop = (item) => {
        var isdel = window.confirm(`确定将 ${item.design_name} 的置顶吗？`);
        if (isdel) {
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
                    setTopList(topl);
                    setNormalList(underl);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="personalcenter_design_box">
            {
                topList.map(item => {
                    return (
                        <div key={item.design_id} className="personalcenter_design_top_item">
                            <div className="personalcenter_design_top_insidebox">
                                <img src={top} alt="" className="personalcenter_design_top_icon" />
                                <div className="personalcenter_design_title">{item.design_name}</div>
                            </div>
                            <div className="personalcenter_design_edit" onClick={() => intomydesign(item)}>编辑</div>
                            <div className="personalcenter_design_delete" onClick={() => del(item)}>删除</div>
                            <div className="personalcenter_design_cancel" onClick={() => cancelTop(item)}>取消置顶</div>
                        </div>
                    )
                })
            }
            {
                normalList.map(item => {
                    return (
                        <div key={item.design_id} className="personalcenter_design_under_item">
                            <div className="personalcenter_design_under_insidebox">
                                <div className="personalcenter_design_title">{item.design_name}</div>
                            </div>
                            <div className="personalcenter_design_edit" onClick={() => intomydesign(item)}>编辑</div>
                            <div className="personalcenter_design_delete" onClick={() => del(item)}>删除</div>
                            <div className="personalcenter_design_toTop" onClick={() => toTop(item)}>置顶</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PersonalDesigns


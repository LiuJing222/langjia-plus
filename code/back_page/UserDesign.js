import React, { useEffect, useState } from 'react'
import BackLeftNav from './BackLeftNav'
import "./UserDesign.css"
import defaultimg from './images/tree.png'

const UserDesign = () => {
    const [users, setUsers] = useState([])
    const [dgn, setDgn] = useState([])
    const [isDelDng, setIsDelDgn] = useState([])
    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/")
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })
        console.log(users)
    }, [])

    const getDesign = (userEmail) => {
        var dgnDiv = document.getElementById(userEmail)
        var dgnsDiv = document.getElementsByClassName("user_designs")
        for (var i = 0; i < dgnsDiv.length; i++) {
            dgnsDiv[i].style.display = "none"
        }
        fetch("https://api.qasdwer.xyz:2019/getuserdesign/" + userEmail)
            .then(res => res.json())
            .then(res => {
                setDgn(res)
                console.log(dgn)
            })
        dgnDiv.style.display = "flex"
    }
    // ======================变为推荐====================================================

    const changeRec = (dgnId) => {
        console.log(dgnId)
        fetch("https://api.qasdwer.xyz:2019/changedesignrecom/" + dgnId, {
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                // console.log("成为推荐")
            })
            .catch(err => {
                console.log(err)
            })
    }
    // // ==========================删除====================================================
    const delDgn = (dngId, userId) => {
        setIsDelDgn([dngId, userId])
        // console.log(dngId, userId, "删除", isDelDng)
    }
    const delDgnSure = (isDelDng) => {
        // console.log(isDelDng[0], isDelDng[1])
        fetch("https://api.qasdwer.xyz:2019/deluserdesign/" + isDelDng[0] + "/" + isDelDng[1])
            .then(res => res.json())
            .then(res => {
                // console.log("删除成功")
                alert("删除成功")
            })
            .catch(err => {
                alert("删除失败", err)
            })
        setIsDelDgn([])
    }
    const delDgnCancel = () => {
        // console.log("取消")
        setIsDelDgn([])
    }
    return (
        <div className='back_user_design'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_user_design_con'>
                <h3 style={{marginLeft:20}}>用户设计信息页</h3>
                <hr />
                <div className='back_user_design_con_div'>
                    {
                        users.map(token => {
                            var userName = token.user_name;
                            var userPortrait = token.user_head_portrait;
                            var userEmail = token.user_id;
                            return <div className='user_design_con' onClick={() => { getDesign(userEmail) }}>
                                <img className='user_design_user_protrait' src={userPortrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + userPortrait : defaultimg} alt="头像"></img>
                                <div className='user_design_user_name' >{userName}</div>
                                <div className='user_designs' id={userEmail}>
                                    {
                                        dgn.map(e => {
                                            if (e.user_id === userEmail) {
                                                return <div style={{ width: "165px", height: "200px", position: "relative", margin: "3px", boxShadow: '2px 2px 2px rgb(214, 233, 253)', backgroundColor: "rgb(226, 243, 255)" }} >
                                                    <img src={e.imgpath} style={{ width: "99%", height: "60%" }} />
                                                    <p style={{ fontSize: "10px" }}>{e.design_name}</p>
                                                    {
                                                        e.is_recom ?
                                                            <button onClick={() => { changeRec(e.design_id) }}>取消推荐</button>
                                                            : <button onClick={() => { changeRec(e.design_id) }}>变成推荐</button>
                                                    }
                                                    <button onClick={() => { delDgn(e.design_id, e.user_id) }}>删除</button>
                                                </div>
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {
                isDelDng[0] ? <div className='isDel_mask'>
                    <div className='isDel_con'>
                        <div className='isDel_con_dgn_confirm'>确认删除设计{isDelDng[0]}吗?</div>
                        <div className='isDel_con_btns'>
                            <button onClick={(e) => delDgnSure(isDelDng)}>确认</button>
                            <button onClick={(e) => delDgnCancel(e)}>取消</button>
                        </div>
                    </div>
                </div>
                    : <div></div>
            }
        </div >
    )
}

export default UserDesign
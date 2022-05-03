import React, { useEffect, useState } from 'react'
import BackLeftNav from "./BackLeftNav"
import "./UserIns.css"
import defaultimg from './images/tree.png'


const UserIns = () => {
    const [users, setUsers] = useState([])
    const [inss, setInss] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/")
            .then(res => res.json())
            .then(res =>
                setUsers(res))
    }, [])
    // ===========================================================================

    const OpenIns = (userEmail, e) => {
        var insDiv = document.getElementById(userEmail)
        var inssDiv = document.getElementsByClassName("inss")
        for (var i = 0; i < inssDiv.length; i++) {
            inssDiv[i].style.display = "none"
        }
        console.log(userEmail, e.target)
        fetch('https://api.qasdwer.xyz:2019/getcollection/' + userEmail)
            .then(res => res.json())
            .then(res => {
                setInss(res)
                setIsOpen(true)
                console.log(res)
            })
        insDiv.style.display = "flex"
    }
    // ==========================================================================

    return (
        <div className='back_user_ins'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_user_ins_con'>
                <h3>用户的灵感收藏</h3>
                {
                    users.map(token => {
                        var userName = token.user_name;
                        var userPortrait = token.user_head_portrait;
                        var userEmail = token.user_id;
                        return <div className='user_manage_user_map'>
                            <div className='user_manage_user' key={userEmail} onClick={(e) => { OpenIns(userEmail, e) }}>
                                <img className='user_manage_user_protrait' src={userPortrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + userPortrait : defaultimg} alt="头像"></img>
                                <div className='user_manage_user_name' >{userName}</div>
                                <div className='user_manage_user_email' >{userEmail}</div>
                                <div className='user_manage_user_open_ins'></div>
                            </div>
                            <div className="inss" id={userEmail} style={{ display: "none", width: "1000px", height: "60px", paddingLeft: "50px" }}>
                                {
                                    inss.map(ins => {
                                        return <div style={{ width: "100px" }}>
                                            <div>{ins.inspire_id}</div>
                                            <div>{ins.title}</div>
                                        </div>
                                    })
                                }
                            </div>
                            
                        </div>
                    })
                }

            </div>
        </div >
    )
}

export default UserIns
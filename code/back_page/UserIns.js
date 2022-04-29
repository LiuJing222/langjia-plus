import React, { useEffect, useState } from 'react'
import BackLeftNav from "./BackLeftNav"
import "./UserIns.css"
import defaultimg from './images/tree.png'
import Open from "./images/open.png"
import Close from "./images/close.png"


const UserIns = () => {
    const [users, setUsers] = useState([])
    const [inss, setInss] = useState([])
    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/")
            .then(res => res.json())
            .then(res =>
                setUsers(res))
    })
    const OpenIns = (email) => {
        // get     /getinspiredatas/:user_id 
        console.log(email)
        fetch('https://api.qasdwer.xyz:2019/getinspiredatas/' + email)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setInss(res)
            })
    }
    return (
        <div className='back_user_ins'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_user_con'>
                <h3>用户的灵感收藏</h3>
                {
                    users.map(token => {
                        var userName = token.user_name;
                        var userPortrait = token.user_head_portrait;
                        var userEmail = token.user_id;
                        return <div>
                            <div className='user_manage_user'>
                                <img className='user_manage_user_protrait' src={userPortrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + userPortrait : defaultimg} alt="头像"></img>
                                <div className='user_manage_user_name' >{userName}</div>
                                <div className='user_manage_user_email' >{userEmail}</div>
                                <div className='user_manage_user_open_ins' onClick={(e) => { OpenIns(userEmail) }}><img src={Open} /></div>
                            </div>
                            {
                                inss ?
                                    inss.map(ins => {
                                        return <div>
                                            
                                        </div>
                                    }) :
                                    <div></div>
                            }
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default UserIns
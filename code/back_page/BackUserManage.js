import React, { useEffect, useState } from 'react'
import BackLeftNav from './BackLeftNav'
import "./BackUserManage.css"
import defaultimg from './images/tree.png'



// 网页可见区域宽：document.body.clientWidth

// 网页可见区域高：document.body.clientHeight

// 网页可见区域宽：document.body.offsetWidth(包括边线的宽)
// 网页可见区域高：document.body.offsetHeight(包括边线的宽)
// 网页正文全文宽：document.body.scrollWidth
// 网页正文全文高：document.body.scrollHeight

const BackUserManage = () => {
    const [users, setUsers] = useState([])
    const [isDelEmail, setIsDelEmail] = useState("")

    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/")
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setUsers(res)
            })
    }, [])
    const delUser = (email) => {
        setIsDelEmail(email)
    }
    const delUserSure = (email) => {
        // console.log(email)
        fetch('https://api.qasdwer.xyz:2019/deluser/' + isDelEmail, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
        })
            .then(res => res.json())
            .then(json => {
                json && setUsers(json)
                alert('删除成功！');
            }).catch(err => {
                alert('删除失败！', err);
            })
        setIsDelEmail("")
    }
    const delUserCancel = () => {
        setIsDelEmail("")
        // console.log("delUserCancel")
    }
    return (
        <div className='back_user_manage'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='back_user_manage_con'>
                <h3>用户管理</h3>
                <div className='user_manage_user' style={{ fontWeight: "bold" }}>
                    <div className='user_manage_user_title_portrait'>头像</div>
                    <div className='user_manage_user_name' >昵称</div>
                    <div className='user_manage_user_email' >邮箱</div>
                    <div className='user_manage_user__title_remove' >操作</div>
                </div>
                {
                    users.map(token => {
                        var userName = token.user_name;
                        var userPortrait = token.user_head_portrait;
                        var userEmail = token.user_id;
                        return <div className='user_manage_user' key={userEmail}>
                            <img className='user_manage_user_protrait' src={userPortrait ? 'https://api.qasdwer.xyz:2019/headPortrait/' + userPortrait : defaultimg} alt="头像"></img>
                            <div className='user_manage_user_name' >{userName}</div>
                            <div className='user_manage_user_email' >{userEmail}</div>
                            <button className='user_manage_user_remove' onClick={() => { delUser(userEmail) }}>移除</button>
                        </div>
                    })
                }
            </div>
            {
                isDelEmail ? <div className='isDel_mask'>
                    <div className='isDel_con'>
                        <div className='isDel_con_confirm'>确认删除用户{isDelEmail}吗?</div>
                        <div className='isDel_con_btns'>
                            <button onClick={(e) => delUserSure()}>确认</button>
                            <button onClick={(e) => delUserCancel(e)}>取消</button>
                        </div>
                    </div>
                </div>
                    : <div></div>
            }
        </div>
    )
}

export default BackUserManage
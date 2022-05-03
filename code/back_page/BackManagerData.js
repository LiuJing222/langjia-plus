import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import BackLeftNav from './BackLeftNav'
import "./BackManagerData.css"
import ADD from "./images/add.png"

const BackManagerData = () => {
    const [managers, setManagers] = useState([])
    const [delM, setDelM] = useState({})
    const [changeM, setChangeM] = useState("")
    const [addM, setAddM] = useState(false)
    const history = useHistory();

    useEffect(() => {
        fetch("https://api.qasdwer.xyz:2019/admindata")
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setManagers(res)
            })
    }, [])
    // ================================删除=========================================
    const delMger = (token) => {
        setDelM(token)
    }
    const delMSure = (email) => {
        fetch("https://api.qasdwer.xyz:2019/deladmin/" + email, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                setDelM({})
                console.log("删除成功")
                // history.push('/backmanagerdata');
                window.location.reload()
            })
            .catch(err => {
                alert("删除失败" + err)
                setDelM({})
            })
    }
    const delMCancel = () => {
        setDelM({})
    }
    // ===========================添加==========================================
    const addAdmin = () => {
        setAddM(true)
    }

    const addMSure = () => {
        var addMEmail = document.getElementById("addMEmail")
        var addMName = document.getElementById("addMName")
        var addMPsd = document.getElementById("addMPsd")
        var addMPhone = document.getElementById("addMPhone")
        var addMJob = document.getElementById("addMJob")
        console.log(addMEmail.value)
        fetch('https://api.qasdwer.xyz:2019/addadmin', {
            method: 'POST',
            body: JSON.stringify({ name: addMName.value, passwd: addMPsd.value, email: addMEmail.value, phone: addMPhone.value, job: addMJob.value }),
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
        })
            .then(res => res.text())
            .then(res => {
                if (res === 'ok') {
                    alert('添加成功！')
                    // history.push('/backmanagerdata');
                    window.location.reload()
                } else {
                    alert('添加失败！', res);
                }
            })
            .catch(err => {
                alert('添加失败！', err.message);
            })
        setAddM(false)
    }
    const addMCancel = () => {
        setAddM(false)
    }
    // =========================修改管理员===================================
    const changeMger = (email) => {
        setChangeM(email)
    }
    const changeMSure = () => {
        var addMName = document.getElementById("addMName")
        var addMPsd = document.getElementById("addMPsd")
        var addMPhone = document.getElementById("addMPhone")
        var addMJob = document.getElementById("addMJob")
        fetch('https://api.qasdwer.xyz:2019/changeadmin', {
            method: 'POST',
            body: JSON.stringify({ email: changeM, name: addMName.value, passwd: addMPsd.value, phone: addMPhone.value, job: addMJob.value }),
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
        })
            .then(res => res.text())
            .then(res => {
                alert('更新成功！')
                // console.log(res)
                window.location.reload()
            })
            .catch(err => {
                alert('更新失败！', err.message);
            })
        setChangeM("")
    }
    const changeMCancel = () => {
        setChangeM("")
    }

    return (
        <div className='back_user_data'>
            <div className='back_home_leftnav'>
                <BackLeftNav></BackLeftNav>
            </div>
            <div className='manage_data_con'>
                <h3>系统管理员</h3>
                <div className='manager_data'>
                    <div className='manager_email' style={{ fontWeight: "bold" }}>管理员邮箱</div>
                    <div className='manager_name' style={{ fontWeight: "bold" }}>管理员</div>
                    <div className='manager_phone' style={{ fontWeight: "bold" }}>管理员电话</div>
                    <div className='manager_op' style={{ fontWeight: "bold" }}>操作</div>
                </div>
                <div className='manager_datas'>
                    {managers.map(token => {
                        return <div className='manager_data'>
                            <div className='manager_email'>{token.admin_email}</div>
                            <div className='manager_name'>{token.admin_name}</div>
                            <div className='manager_phone'>{token.admin_phone}</div>
                            <div className='manager_op'>
                                <button id="delMger" onClick={(e) => { delMger(token) }}>删除</button>
                                <button id="chgMger" onClick={(e) => { changeMger(token.admin_email) }} >编辑</button>
                            </div>
                        </div>
                    })}
                </div>
                {
                    delM.admin_email ?
                        <div className='delM_confirm_mask'>
                            <div className='delM_confirm_con'>
                                <p>确定删除管理员<br />管理员：{delM.admin_name}<br />邮箱：{delM.admin_email}吗？</p>
                                <div className='delM_btns'>
                                    <button onClick={() => { delMSure(delM.admin_email) }}>删！</button>
                                    <button onClick={() => { delMCancel() }}>算了！</button>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                }
                <div className='addAdmin' onClick={() => addAdmin()}><img src={ADD}></img><span>添加管理员</span></div>
                {addM ?
                    <div className='addAdmin_mask'>
                        <div className='addAdmin_con'>
                            <div className='addAdmin_con_input'>邮箱：<input id="addMEmail" placeholder='请输入邮箱' /></div>
                            <div className='addAdmin_con_input'>名字：<input id="addMName" placeholder='请输入名字' /></div>
                            <div className='addAdmin_con_input'>密码：<input id="addMPsd" placeholder='请输入密码' /></div>
                            <div className='addAdmin_con_input'>电话：<input id="addMPhone" placeholder='请输入电话' /></div>
                            <div className='addAdmin_con_input'>职位：<input id="addMJob" placeholder='请输入职位' /></div>
                            <div className='adAdmin_btns'>
                                <button onClick={() => addMSure()}>添加</button>
                                <button onClick={() => addMCancel()}>取消</button>
                            </div>
                        </div>
                    </div> :
                    <div></div>}
                {changeM ?
                    <div className='changeAdmin_mask'>
                        <div className='changeAdmin_con'>
                            <div className='addAdmin_con_input'>你要修改的管理员为：{changeM}</div>
                            <div className='addAdmin_con_input'>名字：<input id="addMName" placeholder='请输入名字' /></div>
                            <div className='addAdmin_con_input'>密码：<input id="addMPsd" placeholder='请输入密码' /></div>
                            <div className='addAdmin_con_input'>电话：<input id="addMPhone" placeholder='请输入电话' /></div>
                            <div className='addAdmin_con_input'>职位：<input id="addMJob" placeholder='请输入职位' /></div>
                            <div className='adAdmin_btns'>
                                <button onClick={() => changeMSure()}>确认修改信息</button>
                                <button onClick={() => changeMCancel()}>取消</button>
                            </div>
                        </div>
                    </div> :
                    <div></div>}
            </div>
        </div >
    )
}

export default BackManagerData
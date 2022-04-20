import React, { useState, useEffect } from 'react'
import './SetPassword.css'
import eye from './images/eye.png'
import no_eye from './images/no_eye.png'
import safe from './images/safe.jpg'

const SetPassword = () => {
    const [oldword, setOldword] = useState('');
    const [newword, setNewword] = useState('');
    const [confirmword, setConfirmword] = useState('');
    const Changepassword = () => {
        const regex1 = /[0-9]+/g;
        const regex2 = /[a-z]+/gi;
        if (newword !== confirmword) {
            alert('两次输入密码不符，请重新输入！')
        } else if (newword.length < 8) {
            alert('新密码需大于等于8个字符！')
        } else if (!regex1.test(newword) || !regex2.test(newword)) {
            alert('新密码需包含数字与字母！')
        } else {
            //const email= "2505469033@qq.com";
            const word ={
                oldWord:oldword,
                newWord:newword
            }
            const email = localStorage.getItem('email');
            fetch('https://api.qasdwer.xyz:2019/changepasswd/' + email, {
                body: JSON.stringify(word),
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset-utf-8'
                }
            })
                .then(res => {
                    if(res.ok){
                        alert('修改成功！')
                        window.location.reload();
                    }else{
                        alert('请检查原密码是否正确！')
                    }
                })
                .catch(err => { console.log(err) })
        }
    }
    const ToVisable = (e) => {
        const parentNode = e.target.parentElement.parentElement;
        if (parentNode.childNodes[2] == e.target.parentElement) {
            if (e.target.src == no_eye) {
                e.target.src = eye;
                e.target.parentElement.parentElement.childNodes[1].type = "text";
            } else {
                e.target.src = no_eye;
                e.target.parentElement.parentElement.childNodes[1].type = "password";
            }
        } else if(parentNode.childNodes[4] == e.target.parentElement) {
            if (e.target.src == no_eye) {
                e.target.src = eye;
                e.target.parentElement.parentElement.childNodes[3].type = "text";
            } else {
                e.target.src = no_eye;
                e.target.parentElement.parentElement.childNodes[3].type = "password";
            }
        }else {
            if (e.target.src == no_eye) {
                e.target.src = eye;
                e.target.parentElement.parentElement.childNodes[5].type = "text";
            } else {
                e.target.src = no_eye;
                e.target.parentElement.parentElement.childNodes[5].type = "password";
            }
        }
    }
    return (
        <div className="personalcenter_setting_setpassword">
            <div>
                <p>账号安全</p>
                <input type="password" value={oldword} onChange={(e) => setOldword(e.target.value)} placeholder="原密码"/>
                <p>* 请注意原密码正确性<img className="new_eye" onClick={(e) => ToVisable(e)} src={no_eye} /></p>
                <input type="password" value={newword} onChange={(e) => setNewword(e.target.value)}  placeholder="新密码"/>
                <p>* 新密码需包含英文字母与数字且不少于8位<img className="new_eye" onClick={(e) => ToVisable(e)} src={no_eye} /></p>

                <input type="password" value={confirmword} onChange={(e) => setConfirmword(e.target.value)} placeholder="确认新密码"/>
                <p>* 新密码需包含英文字母与数字且不少于8位<img className="confirm_eye" onClick={(e) => ToVisable(e)} src={no_eye} /></p>

                <div onClick={() => Changepassword()}>提交修改</div>
            </div>
            <div><img src={safe} /></div>
        </div>
    )
}

export default SetPassword

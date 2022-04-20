import React, { useState, useEffect } from 'react'
import './ChangeEmail.css'
import emailpng from './images/change_email.png'
import eye from './images/eye.png'
import no_eye from './images/no_eye.png'

const ChangeEmail = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    var oldemail = localStorage.getItem('email');
    const ChangeEmail = () => {
        if (password == '') {
            alert('请输入原密码！')
        } else if (email == '') {
            alert('请输入新邮箱！')
        } else {
            console.log(password, email); 
            const word ={
                passwd:password,
                newemail:email
            }
           
            fetch('https://api.qasdwer.xyz:2019/changeemail/' + oldemail, {
                body: JSON.stringify(word),
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset-utf-8'
                }
            })
                .then(res => {
                    if(res.ok){
                        alert('修改成功！');
                        localStorage.setItem('email',email)
                        window.location.reload();
                    }else{
                        alert('请检查原密码是否正确！')
                    }
                })
                .catch(err => { console.log(err) })
        }
    }
    const ToVisable = (e) => {
        if (e.target.src == no_eye) {
            e.target.src = eye;
            e.target.parentElement.parentElement.childNodes[1].type = "text";
        } else {
            e.target.src = no_eye;
            e.target.parentElement.parentElement.childNodes[1].type = "password";
        }
    }

    return (
        <div className="personalcenter_setting_changeemail">
            <div>
                <p>邮箱地址<img onClick={(e) => ToVisable(e)} className="password_eye" src={no_eye} /></p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="为了您的账户安全请输入密码" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={oldemail} />
                <p>* 邮箱地址是您用来登录账户的凭证，并帮助您在忘记密码的情况下进行密码重置。为确保您的邮箱地址正确有效，每次更换邮箱之后，请根据操作提示来完成邮箱验证。</p>
                <div><div onClick={() => ChangeEmail()}>更换</div></div>
                <p>* 如果无法更新请联系我们予以帮助解决，联系电话：188 xxxx 7758</p>
            </div>
            <div><img src={emailpng} /></div>
        </div>
    )
}

export default ChangeEmail

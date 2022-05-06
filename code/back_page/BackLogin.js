import React from 'react'
import "./BackLogin.css"

const BackLogin = () => {
  var email = document.getElementById("back_login_email_input")
  var psd = document.getElementById("back_login_psd_input")
  // var emailValue = email.value
  const loginIn = () => {
    console.log(email)
  }
  return (
    <div className='back_login'>
      <div className='back_login_con'>
        <div className='back_login_email'>邮箱：<input id="back_login_email_input" placeholder='请输入邮箱' /></div>
        <div className='back_login_psd'>密码：<input id="back_login_psd_input" placeholder='请输入密码' /></div>
        <button onClick={loginIn()}>登录</button>
      </div>
    </div>
  )
}

export default BackLogin
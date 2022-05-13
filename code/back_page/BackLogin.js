import React from 'react'
import "./BackLogin.css"
import { useHistory } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';

const BackLogin = () => {
  const history = useHistory();
  
  
  const loginIn = () => {
    var email = document.getElementById("back_login_email_input")
    var psd = document.getElementById("back_login_psd_input")
    console.log(email.value);
    fetch('https://api.qasdwer.xyz:2019/adminlogin',{
      method:'POST',
      body: JSON.stringify({ email: email.value, passwd: psd.value }),
      headers: {
        "content-type": "application/json;charset=utf-8;"
      }
    })
    .then(res=>res.text())
    .then(res=>{
      console.log(res)
      if(res == 'ok'){
        history.replace('/backusermanage')
      }else{
        alert('账户名或密码错误！')
      }
    })
  }
  return (
    <div className='back_login'>
      
      <div className='back_login_con'>
        <div className='back_login_title'>欢迎登录朗家后台</div>
        <Form 
        initialValues={{ remember: true }}
        onFinish={loginIn}
        >
          <Form.Item
          className='back_login_email'
          name="email"
          rules={[
            {
              type: 'email',
              message: '邮箱输入有误请检查！',
            },
            {
              required: true,
              message: '请输入你的邮箱！',
            },
          ]}
          >
            <Input id="back_login_email_input" className='back_login_input'  placeholder='请输入邮箱' />
          </Form.Item>
        </Form>
        <Form.Item 
        className='back_login_psd'
        name="password"
        rules={[{required: true,message: '请输入你的密码！'}]}
        >  
          <Input id="back_login_psd_input" className='back_login_input'  placeholder='请输入密码' />
        </Form.Item> 
        <button onClick={()=>loginIn()} className='back_login_btn'>登录</button>
      </div>
    </div>
  )
}

export default BackLogin
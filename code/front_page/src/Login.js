import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import "./Login.css"
import side from "./images/login_side_img.jpg";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { MailOutline, KeyOutline } from 'antd-mobile-icons'
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Login = () => {
  const history = useHistory();
  const [display, setDiaplsy] = useState({ login: 'block', forget: 'none', register: 'none' })
  // 登录
  const onFinish1 = (values) => { 
    console.log('Received values of form: ', values);
    fetch('https://api.qasdwer.xyz:2019/login', {
        method: 'POST',
        body: JSON.stringify({ id: values.email, passwd: values.password }),
        headers: {
            "content-type": "application/json;charset=utf-8;"
        }
    })
      .then(res => res.json())
    .then(res => {
        if(res instanceof Array){
            localStorage.setItem('email',res[0].user_id)
            // dispatch({type:"set_login_info",value:res[0]})
            history.replace('/home');
        }else{
            alert(res.message)
            
        }
    })
    .catch(err => {
        console.log(err);
    })
  }
  // 忘记密码
  const onFinish2 = (values) => {
    fetch('https://api.qasdwer.xyz:2019/getpasswd', {
            method: 'POST',
            body: JSON.stringify({ id: values.send_email}),
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
    })
    .then(res => res.text())
    .then(res => {
        if (res=='ok') {
            alert('请查看邮箱！')
            setDiaplsy({ login: 'block', forget: 'none', register: 'none' });
        } else {
            alert(res);
            console.log(res)
        }
    })
    .catch(err => {
        console.log(err);
    })
   }
  //  注册
  const onFinish3 = (values) => { 
    fetch('https://api.qasdwer.xyz:2019/register', {
            method: 'POST',
            body: JSON.stringify({ id: values.email, passwd: values.password }),
            headers: {
                "content-type": "application/json;charset=utf-8;"
            }
    })
    .then(res => res.text())
    .then(res => {
        if (res==='ok') {
            setDiaplsy({ login: 'block', forget: 'none', register: 'none' })
        } else {
            alert(res);
        }
    })
    .catch(err => {
        alert(err.message);
    })

  }
  const forgetPwd = () => {
    setDiaplsy({ ...display, login: 'none', forget: 'block' });
  }
  return (
    <div className="login_container">
      <div className="login_header">
        <Link to='/home'><div>朗家</div></Link>
      </div>
      <div className='login_footer'>
        <img src={side} alt="" className='login_footer_img' />
        <div className='login_form'>
          <div className='login_form_inner' style={{ display: display.login, marginLeft: -5 }}>
            <p>立即登录</p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish1}
              style={{marginLeft:-100}}
            >
              <Form.Item
                name="email"
                className="user_pwd_all"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >

                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-Mail" className="user_pwd_inp" />
              </Form.Item>
              <Form.Item
                name="password"
                className="user_pwd_all"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="PASSWORD"
                  className="user_pwd_inp"
                />
              </Form.Item>
              <Form.Item style={{marginTop:40}}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className='rem_password'>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" onClick={forgetPwd}>
                  忘记密码?
                </a>
              </Form.Item>

              <Form.Item className="sub" style={{marginTop:-10,marginLeft:-18}}>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{     marginLeft: 56,width: 362,borderRadius: 10 }}>
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className='login_free_register'>
              <div>没有账号？</div>
              <a className='register' onClick={() => setDiaplsy({ ...display, login: 'none', register: 'block' })}>免费注册</a>
            </div>
            
          </div>
          <div className='login_form_inner' style={{ display: display.forget, marginTop: 20 }}>
            <p style={{marginBottom:80}}>修改密码</p>
            {/* <div className="loginText" style={{paddingTop: 50}}>请在下面输入框输入您的邮箱</div> */}
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish2}
              style={{ marginLeft: -100 }}
            >
              <Form.Item
                name="send_email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              style={{marginTop:25}}
              >
                <Input prefix={<MailOutline style={{ position: 'relative', top: 3, left: 31 }} className="site-form-item-icon" />} placeholder="邮箱" />
              </Form.Item>

              <Form.Item style={{ marginTop: 50,marginLeft:-7 }}>
                <Button type="primary" htmlType="submit" className="confirm-form-button" style={{marginLeft: 33,width: 362,borderRadius: 10}}>
                  确认
                </Button>
              </Form.Item>
            </Form>
            <div className='login_have_pwd'>
              <div>已有密码？</div>
              <a className='register' onClick={() => setDiaplsy({ ...display, login: 'block', forget: 'none' })}>立即登录</a>
              
            </div>
          </div>
          <div className='login_form_inner' style={{ display: display.register }}>
            <p>欢迎注册</p>
            <Form
              {...formItemLayout}
              // form={form}
              name="register"
              onFinish={onFinish3}
              scrollToFirstError
              style={{ marginLeft: -96 }}

            >
              <Form.Item
                name="email"
                style={{ marginLeft: -10 }}
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
                <Input prefix={<MailOutline className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>

              <Form.Item
                name="password"
                className='pwd_my'
                // label="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的密码！',
                  },
                ]}
              >
                <Input.Password prefix={<KeyOutline className="site-form-item-icon"/>} placeholder="请输入密码" />
              </Form.Item>

              <Form.Item
                name="confirm"
                // label="重复确认密码"
                className='pwd_my'
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: '请再次输入密码！',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('两次输入密码不同！'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<KeyOutline className="site-form-item-icon" />} placeholder="请再次输入密码" />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('请勾选注册须知！')),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox style={{marginTop:20,fontSize:15}}>
                  我阅读并同意 <a href="/information" className='register_know' style={{display:'inline-block'}}>注册须知</a>
                </Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{     marginLeft: 1,width: 362,borderRadius: 10 }}>
                  注册
                </Button>
              </Form.Item>

            </Form>
            <div className='login_have_pwd' style={{marginTop:60}}>
              <div>已有密码？</div>
              <a className='register' onClick={() => setDiaplsy({ ...display, login: 'block', register: 'none' })}>立即登录</a>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

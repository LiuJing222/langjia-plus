import React, { useState } from 'react'
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
  const [display, setDiaplsy] = useState({ login: 'block', forget: 'none', register: 'none' })
  const onFinish1 = (values) => { }
  const onFinish2 = (values) => { }
  const onFinish3 = (values) => { }
  const forgetPwd = () => {
    setDiaplsy({ ...display, login: 'none', forget: 'block' });
  }
  return (
    <div className="login_container">
      <div className="login_header">
        <div>朗家</div>
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
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className='rem_password'>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" onClick={forgetPwd}>
                  忘记密码?
                </a>
              </Form.Item>

              <Form.Item className="sub">
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginLeft: 68 }}>
                  登录
                </Button>
                Or <a className='register' onClick={() => setDiaplsy({ ...display, login: 'none', register: 'block' })}>注册</a>
              </Form.Item>
            </Form>
          </div>
          <div className='login_form_inner' style={{ display: display.forget, marginTop: 20 }}>
            <p>修改密码</p>
            {/* <div className="loginText" style={{paddingTop: 50}}>请在下面输入框输入您的邮箱</div> */}
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish2}
              style={{ marginTop: 30 }}
            >
              <Form.Item
                name="send_email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              // style={{marginLeft:25}}
              >
                <Input prefix={<MailOutline style={{ position: 'relative', top: 21, left: 10 }} className="site-form-item-icon" />} placeholder="邮箱" style={{ width: 200, height: 22 }} />
              </Form.Item>

              <Form.Item style={{ marginTop: 50 }}>
                <Button type="primary" htmlType="submit" className="confirm-form-button">
                  确认
                </Button>
              </Form.Item>
            </Form>
            <div style={{ marginLeft: 3, marginTop: 90 }}>
              -----------
              <a style={{ fontSize: 6, color: '#6381bc' }} onClick={() => setDiaplsy({ ...display, login: 'block', forget: 'none' })}> 登 录 </a>
              -----------
            </div>
          </div>
          <div className='login_form_inner' style={{ display: display.register }}>
            <p style={{ marginLeft: -2 }}>欢迎注册</p>
            <Form
              {...formItemLayout}
              // form={form}
              name="register"
              onFinish={onFinish3}
              scrollToFirstError
              style={{ marginLeft: -2 }}

            >
              <Form.Item
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
                <Input style={{ marginLeft: -8 }} prefix={<MailOutline className="site-form-item-icon" />} placeholder="请输入邮箱" />
              </Form.Item>

              <Form.Item
                name="password"
                // label="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的密码！',
                  },
                ]}
              >
                <Input.Password prefix={<KeyOutline className="site-form-item-icon" />} placeholder="请输入密码" />
              </Form.Item>

              <Form.Item
                name="confirm"
                // label="重复确认密码"
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
                <Checkbox>
                  我阅读并同意 <a href="/information" className='register_know'>注册须知</a>
                </Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form.Item>

            </Form>
            <div>
              -----------
              <a style={{ fontSize: 6, color: '#6381bc' }} onClick={() => setDiaplsy({ ...display, login: 'block', register: 'none' })}> 登 录 </a>
              -----------
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

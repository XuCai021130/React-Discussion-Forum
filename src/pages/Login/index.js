import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = ({ password, phone}) => {
    console.log(password);
    
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger="onBlur"
          onFinish={onFinish}>
          <Form.Item
            name='phone'
            rules={[
              {
              required: true,
              message: 'Please input your phone number'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: 'Please enter correct phone number'
              }
            ]}>
            <Input size="large" placeholder="Please enter your phone number" />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
              required: true,
              message: 'Please input your password'
              }
            ]}>
            <Input size="large" placeholder="Please enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
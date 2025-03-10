import { Link, useNavigate } from 'react-router-dom'

import useUserStore from '@/store/userStore'

import { Col, Form, Input, Row } from 'antd'

const LoginPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { login } = useUserStore()

  const handleLogin = (data) => {
    login(data, (role) => {
      if (role.includes('ADMIN')) {
        navigate('/admin')
      } else if (role.includes('EMPLOYEE')) {
        navigate('/admin/product')
      } else navigate('/')
    })
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center">
      <Row className="w-full max-w-5xl p-5 rounded-lg flex shadow-2xl bg-white bg-opacity-80">
        <Col span={10} className="flex justify-center items-center">
          <img src="https://hacom.vn/template/2024/images/bg-pop-login-phone.png" className="object-cover" alt="logo" />
        </Col>
        <Col span={14} className="p-5">
          <Form
            form={form}
            className="flex flex-col gap-2 w-full"
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 18
            }}
            onFinish={handleLogin}
            autoComplete="off">
            <div className="flex items-center justify-center mt-5">
              <h1 className="text-center h4">Đăng nhập</h1>
            </div>
            <p className="font-medium text-center text-[15px] mb-8 mt-5">Xin chào, vui lòng nhập email và mật khẩu</p>
            <Form.Item
              label="Email"
              labelAlign="left"
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập địa chỉ email!' },
                { type: 'email', message: 'Địa chỉ email không hợp lệ!' }
              ]}
              sx={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
              <Input style={{ height: 40 }} placeholder="Email" type="email" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              labelAlign="left"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!'
                },
                {
                  min: 6,
                  message: 'Mật khẩu phải có ít nhất 6 ký tự!'
                }
              ]}
              sx={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
              <Input.Password
                style={{ height: 40 }}
                placeholder="Mật khẩu"
                type="password"
                className="flex items-center"
              />
            </Form.Item>

            <div className="text-end mb-2">
              <Link className="no-underline link" to="/forgot_password">
                Quên mật khẩu
              </Link>
            </div>

            <button className="mb-5 h-[40px] btn btn-primary w-full" type="primary">
              Đăng nhập
            </button>
          </Form>

          <div className="text-center">
            Bạn chưa có tài khoản?{' '}
            <Link className="no-underline link" to="/register">
              Đăng ký
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LoginPage

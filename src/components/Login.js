import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

class NormalLoginForm extends Component{
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
          <Form onSubmit={this.handleSubmit} className="login-form">
          <div className="logo">
            <img src={Logo} alt="Ticket Master"/>
          </div>
          <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Forgot password
          </a><br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button><br />
          Or <Link to="/register">register now!</Link>
          </Form.Item>
          </Form>
        </div>
      );
    }
  }
  
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;
import React,{Component} from 'react';
import Logo from '../assets/images/logo.png';
import {
    Form,
    Icon,
    Input,
    Select,
    Button,
  } from 'antd';
  
const { Option } = Select;

class RegistrationForm extends Component {
state = {
    confirmDirty: false,
    autoCompleteResult: [],
};

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
        console.log('Received values of form: ', values);
    }
    });
};

handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
    } else {
    callback();
    }
};

render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
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
    const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
    })(
    <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
        <Option value="87">+22</Option>
    </Select>,
    );

    return (
    <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
        <div className="logo">
            <img src={Logo} alt="Ticket Master"/>
          </div>
          <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
          </Form.Item>
        <Form.Item label="E-mail">
        {getFieldDecorator('email', {
            rules: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ],
        })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('password', {
            rules: [
            {
                required: true,
                message: 'Please input your password!',
            },
            {
                validator: this.validateToNextPassword,
            },
            ],
        })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Phone Number">
        {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
            Register
        </Button>
        </Form.Item>
    </Form>
    );
}
}
  
const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register;
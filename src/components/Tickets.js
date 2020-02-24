import React,{Component} from 'react';
import axios from 'axios';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
  } from 'antd';

const { TextArea } = Input;
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
        axios.post('http://localhost:3001/tickets',values)
        .then(value =>{
          console.log(value);
        }).catch((error) =>{
          console.log(error);
        })
    }
    });
};

handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

 handleChange =value => {
    console.log(`selected ${value}`);
  }

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
    return (
    <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
          <Form.Item label="App Name">
          {getFieldDecorator('appName', {
            rules: [{ required: true, message: 'Please input your App Name!' }],
          })(
            <Input
              placeholder="App Name"
            />,
          )}
          </Form.Item>
          <Form.Item label="Subject">
          {getFieldDecorator('subject', {
            rules: [{ required: true, message: 'Please input your Subject!' }],
          })(
            <Input />,
          )}
          </Form.Item>
          <Form.Item label="Priority">
          {getFieldDecorator('priority')(
            <Radio.Group>
              <Radio value="low">Low</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="high">High</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input your Description!' }],
          })(
            <TextArea
              placeholder="Enter Here"
            />,
          )}
          </Form.Item>
          <Form.Item label="Department">
          {getFieldDecorator('department')(
            <Select setFieldsValue="select" style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="technical">Technical</Option>
            <Option value="sales">Sales</Option>
            <Option value="hr">Hr</Option>
            </Select>,
          )}
          </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
    );
}
}
  
const Tickets = Form.create({ name: 'register' })(RegistrationForm);

export default Tickets;



import {
    PhoneOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Button, Form, Input, Select, } from 'antd';
const { Option } = Select;



const Signup = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="44">+44</Option>
                <Option value="1">+1</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Form layout='vertical'>
            <h1 >Enter Your Details here</h1>


            <Form.Item label="First Name" name="firstName"
                rules={[{
                    required: true,
                    message: 'Please input your firstname!'
                },
                {
                    pattern: '(?=.*[a-z])',
                    message: "please Enter only ALPHABETS First Name Should Be Minimum 3 Characters"
                },
                ]}>
                <Input placeholder='please enter your Firstname' />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your lastname!'
                    },
                    {
                        pattern: '(?=.*[a-z])',
                        message: "please Enter only ALPHABETS"
                    },
                ]}>
                <Input placeholder='please enter your Lastname' />
            </Form.Item>
            <Form.Item label="Email Address" name="emailaddress"
                rules={[{
                    type: 'email',
                    message: 'The input is not valid E-mail'
                },
                {
                    required: true,
                    message: 'Please enter a valid emailaddress!',
                },]}>
                <Input prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='please enter your Email' />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Requests if any(Optional)">
                <Input.TextArea />
            </Form.Item>

            <Form.Item>
                <Button style={{ 'background-color': ' rgb(33, 33, 141)', padding: '7px' }} type="primary" htmlType='submit' block><a href="/Last">Book</a></Button>
            </Form.Item>
        </Form>



    );
}

export default Signup;
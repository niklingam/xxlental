import { Button, Form, Input, InputNumber } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import './contactcss.css'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${10} and ${11}',
    },
};


const onFinish = (values) => {
    console.log(values);
};
const App = () => (
    <div>
        <div className="from1">
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <FormItem
                    name={['user', 'Mobile No']}
                    label="Mobile No"
                    rules={[
                        {
                            type: 'numbers',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </FormItem>
                <Form.Item
                    name={['user', 'introduction']}
                    label="Message"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,

                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className="more">
            <p>If you need more Information Please Contact</p>
            <p style={{color:"red"}}>email:</p>
            <p>123@gmail.com</p><br />
            <p>Contact Number</p>
            <p>+44 (0)1234567891</p>

        </div>
    </div>
);
export default App;
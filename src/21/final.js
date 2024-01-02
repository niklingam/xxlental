import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="success"
    title="Successfully Booked Your stay"
    subTitle="Thank you for Booking. Visit Again."
    extra={[
      <Button type="primary" key="console">
       <a href="/"> Home</a>
      </Button>,
    ]}
  />
);
export default App;
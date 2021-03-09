import './App.scss';
import {Row, Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Row className='first-row'>
        <Col xs={2} className='dark-grey vh-10'>FINPAL</Col>
        <Col xs={8} className='yellow vh-10'></Col>
        <Col xs={2} className='light-grey vh-10'></Col>
      </Row>
      <Row className='second-row'>
        <Col xs={2} className='dark-grey-2 vh-90'>FINPAL</Col>
        <Col xs={8} className='light-grey vh-90'></Col>
        <Col xs={2} className='vh-90'>Click on  one or several transactions to see details</Col>
      </Row>
    </div>
  );
}

export default App;

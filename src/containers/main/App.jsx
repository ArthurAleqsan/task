import 'antd/dist/antd.css';
import './app.scss';
import { Provider } from 'react-redux';
import store from '../../store/configureReduxStore';
import { Col, Row } from 'antd';


import SideBar from '../../components/common/side-bar/SideBar';
import Content from '../../components/common/content/Content';

const App = () => {
  return (
    <Provider store = {store}>
      <Row className = 'app'>
          <Col span = {2}>
            <SideBar />
          </Col>
          <Col span = {22}>
            <Content />
          </Col>
      </Row>
    </Provider>

  );
}

export default App;

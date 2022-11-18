import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PersonList from './components/PersonList';

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h2>User List</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <PersonList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

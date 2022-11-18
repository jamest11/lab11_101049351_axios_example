import { Card, Row, Col, Image, Button } from "react-bootstrap";

const PersonCard = (props) => {
  const person  = {
    title: props.person.name.title,
    fullName: `${props.person.name.first} ${props.person.name.last}`,
    gender: props.person.gender,
    address: `${props.person.location.street.number} ${props.person.location.street.name}, ${props.person.location.city}` +
      `${props.person.location.state}, ${props.person.location.country}, ${props.person.location.postcode}`,
    timezone: `${props.person.location.timezone.description} (${props.person.location.timezone.offset})`,
    email: props.person.email,
    birthDate: `${props.person.dob.date} (${props.person.dob.age})`,
    regDate: props.person.registered.date,
    phone: props.person.phone,
    cell: props.person.cell,
    photo: props.person.picture.large,
    username: props.person.login.username
  };
  
  return (
    <Card style={{ width: '55rem' }} className="m-2 mx-auto bg-light">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{person.title} {person.fullName}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Row>
              <Col>
                <Image src={person.photo} roundedCircle />
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <Button className="my-2" size="sm">Details</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="my-1">
              <Col><b>Username: </b>{person.username}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Gender: </b>{person.gender}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Time Zone: </b>{person.timezone}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Address: </b>{person.address}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Email: </b>{person.email}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Birth Date: </b>{person.birthDate}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Register Date: </b>{person.regDate}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Phone Number: </b>{person.phone}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Cell Number: </b>{person.cell}</Col>
            </Row>
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
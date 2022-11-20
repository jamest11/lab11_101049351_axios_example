import { Card, Row, Col, Image, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  const userInfo  = {
    title: user.name.title,
    fullName: `${user.name.first} ${user.name.last}`,
    gender: user.gender,
    address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}` +
      `${user.location.state}, ${user.location.country}, ${user.location.postcode}`,
    timezone: `${user.location.timezone.description} (${user.location.timezone.offset})`,
    email: user.email,
    birthDate: `${user.dob.date} (${user.dob.age})`,
    regDate: user.registered.date,
    phone: user.phone,
    cell: user.cell,
    photo: user.picture.large,
    username: user.login.username,
    uuid: user.login.uuid
  };
  
  return (
    <Card style={{ width: '55rem' }} className="m-2 mx-auto bg-light">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{userInfo.title} {userInfo.fullName} - {userInfo.uuid}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Row>
              <Col>
                <Image src={userInfo.photo} roundedCircle />
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
              <Col><b>Username: </b>{userInfo.username}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Gender: </b>{userInfo.gender}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Time Zone: </b>{userInfo.timezone}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Address: </b>{userInfo.address}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Email: </b>{userInfo.email}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Birth Date: </b>{userInfo.birthDate}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Register Date: </b>{userInfo.regDate}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Phone Number: </b>{userInfo.phone}</Col>
            </Row>
            <Row className="my-1">
              <Col><b>Cell Number: </b>{userInfo.cell}</Col>
            </Row>
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
}

export default UserCard;
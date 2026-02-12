import { Col, Container, Row } from "react-bootstrap";
import Card from "../../../components/card/Card.component";
import "./Dashboard.styles.css";

const Dashboard = () => {
  return (
    <>
      <h2>Hello Sourav </h2>
      <div className= "dashboard-widgets mt-4">
        <Container fluid>
          <Row>
            <Col xs={6}>
               <Card title="Attendance" data="95%" customClassName="attendance"/>
            </Col>
            <Col xs={6}>
              <Card title="Tasks" data="5 tasks pending" customClassName="tasks"/>
              <Card title="Emails" data="10 emails" customClassName="mt-1 email"/>
            </Col>
          </Row>
        </Container>
     
      </div>
      
    </>
  )
}

export default Dashboard
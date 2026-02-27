import { Col, Container, Row } from "react-bootstrap";
import Card from "../../../components/card/Card.component";
import "./Dashboard.styles.css";
import AttendanceWidget from "../../../components/widgets/attendanceWidget/AttendanceWidget.component";
import TodoComponent from "../../../components/todo/Todo.component";

const Dashboard = () => {
  return (
    <>
      <h2>Hello Sourav </h2>
      <div className="dashboard-widgets mt-4">
        <Container fluid>
          <Row>
            <Col className="p-0" xs={12} lg={6} md={6} sm={12}>
              <Card title="Time Tracked" data={<AttendanceWidget />} customClassName="attendance" />
            </Col>
            <Col className="p-0" xs={12} lg={6} md={6} sm={12}>

              <div className="">
                <h3>Email</h3>
                <TodoComponent />
              </div>

              <div className="mt-3">
                <h3>Task</h3>
                <TodoComponent />
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard
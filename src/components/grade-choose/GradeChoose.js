
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';

export default function GradeChoose() {
  const grades = [
    { title: "Pre-K", image: "/images/pre-k.png", text: "Simple addition single digit math solutions for Pre-K kids" },
    { title: "Kindergarten", image: "/images/kinder.png", text: "Simple addition single digit math solutions for Kindergarten kids" },
    { title: "First Grade", image: "/images/first.png", text: "Simple addition single digit math solutions for First Grade kids" },
    { title: "Second Grade", image: "/images/second.png", text: "Simple addition single digit math solutions for Second Grade kids" },
    { title: "Third Grade", image: "/images/third.png", text: "Simple addition single digit math solutions for Third Grade kids" },
    { title: "Fourth Grade", image: "/images/fourth.png", text: "Simple addition single digit math solutions for Fourth Grade kids" },
    // ... add other grade details here
  ];
  const navigate = useNavigate();

  const handleChoose = (gradeTitle) => {
    navigate('/game', { state: { title: gradeTitle } });
  };

  return (
    <Container>
      <Row>
        {grades.map((grade, index) => (
          <Col xs={12} md={6} lg={4} key={index} >
            <Card style={{ width: "18rem", marginBottom: "1rem" }} onClick={() => handleChoose(grade.title)}>
              <Card.Img variant="top" src={grade.image} />
              <Card.Body>
                <Card.Title>{grade.title}</Card.Title>
                <Card.Text>{grade.text}</Card.Text>                
              </Card.Body>
            </Card>
          </Col >
        ))}
      </Row>
    </Container>
  );
}

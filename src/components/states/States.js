import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import NavUser from "../nav-user/NavUser";
import InfoNav from "../info-nav/InfoNav";
import { StatisticContext } from "../../contexts/statistic-context/StatisticContext";

export default function States() {
  const { loadStates } = useContext(StatisticContext);
  const [loadedStates, setLoadedStates] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      loadStates(userId)
        .then((fetchedStates) => {
          setLoadedStates(fetchedStates);
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
        });
    }
    // eslint-disable-next-line
  }, []);

  const convertRateToGrade = (rate) => {
    const gradeStyle = {
      color: "", // default color
      emoji: "🔴", // default emoji for F grade
    };

    if (rate >= 90) {
      gradeStyle.color = "green";
      gradeStyle.emoji = "🌟"; // Star for A+
    } else if (rate >= 85) {
      gradeStyle.color = "limegreen";
      gradeStyle.emoji = "😊"; // Smiling face for A
    } else if (rate >= 80) {
      gradeStyle.color = "lightgreen";
      gradeStyle.emoji = "😀"; // Happy face for A-
    } else if (rate >= 75) {
      gradeStyle.color = "yellowgreen";
      gradeStyle.emoji = "👍"; // Thumbs up for B+
    } else if (rate >= 70) {
      gradeStyle.color = "yellow";
      gradeStyle.emoji = "😄"; // Grinning face for B
    } else if (rate >= 65) {
      gradeStyle.color = "gold";
      gradeStyle.emoji = "😌"; // Relieved face for B-
    } else if (rate >= 60) {
      gradeStyle.color = "orange";
      gradeStyle.emoji = "🙂"; // Slightly smiling face for C+
    } else if (rate >= 55) {
      gradeStyle.color = "darkorange";
      gradeStyle.emoji = "😐"; // Neutral face for C
    } else if (rate >= 50) {
      gradeStyle.color = "orangered";
      gradeStyle.emoji = "😶"; // Expressionless face for C-
    } else if (rate >= 45) {
      gradeStyle.color = "red";
      gradeStyle.emoji = "🙁"; // Slightly frowning face for D+
    } else if (rate >= 40) {
      gradeStyle.color = "darkred";
      gradeStyle.emoji = "☹️"; // Frowning face for D
    } else if (rate >= 35) {
      gradeStyle.color = "maroon";
      gradeStyle.emoji = "😦"; // Frowning face with open mouth for D-
    }

    return (
      <span style={{ color: gradeStyle.color }}>
        {gradeStyle.emoji} {rate >= 35 ? `Grade ${rate}%` : "F"}
      </span>
    );
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutes and ${remainingSeconds} seconds`;
  };

  return (
    <>
      <NavUser />
      <InfoNav />

      <Container className="mt-4">
        <h2 className="mb-3">Statistic</h2>
        <Row>
          {loadedStates.map((state, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Level-{state.level}:{" "}
                    {state.type === "sub"
                      ? "Subtraction"
                      : state.type === "mul"
                      ? "Multiplication"
                      : state.type === "div"
                      ? "Division"
                      : "Addition"}
                  </Card.Title>
                  <Card.Text>
                    You got: {convertRateToGrade(state.rate)}
                  </Card.Text>
                  <Card.Text>Time left: {formatTime(state.time)}</Card.Text>
                  <Card.Text>
                    {state.localTime} {state.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

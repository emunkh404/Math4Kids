import React from 'react';
import { Badge } from 'react-bootstrap';

export default function State({ score, problems }) {
  const rate = problems ? (score / problems * 100).toFixed(2) : 0;
  return (
    <Badge bg="success" text="dark">
      Rate: {rate}%
    </Badge>
  );
}

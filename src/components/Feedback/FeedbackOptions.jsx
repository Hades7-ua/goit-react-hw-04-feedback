import React from 'react';
import { Button, Title, Container } from './FeedbackOptions.styled';

function Feedbacks({ options, onLeaveFeedback }) {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
}

export default Feedbacks;

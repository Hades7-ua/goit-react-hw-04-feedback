import Feedbacks from './Feedback/FeedbackOptions';
import { Container } from './Feedback/FeedbackOptions.styled';
import { NotificationMessage } from './Statistics/Statistics.styled';
import StatisticsFeedback from './Statistics/StatisticsFeedback';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleLeaveFeedback = option => {
    setFeedback(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const total = countTotalFeedback();
  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

  return (
    <Container>
      <Feedbacks
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleLeaveFeedback}
      />
      {total === 0 ? (
        <NotificationMessage>There is no feedback!</NotificationMessage>
      ) : (
        <StatisticsFeedback
          good={feedback.good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedbackPercentage}
        />
      )}
    </Container>
  );
};

export default App;

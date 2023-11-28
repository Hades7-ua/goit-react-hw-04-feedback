import React, { Component } from 'react';
import Feedbacks from './Feedback/FeedbackOptions';
import { Container } from './Feedback/FeedbackOptions.styled';
import { NotificationMessage } from './Statistics/Statistics.styled';
import StatisticsFeedback from './Statistics/StatisticsFeedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

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
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedbackPercentage}
          />
        )}
      </Container>
    );
  }
}

export default App;

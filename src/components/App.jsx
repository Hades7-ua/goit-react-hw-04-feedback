import React, { Component } from 'react';
import Feedbacks from './Feedback/FeedbackOptions';

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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Feedbacks
          options={Object.keys(this.state)}
          handleLeaveFeedback={this.onLeaveFeedback}
        />
      </div>
    );
  }
}

export default App;

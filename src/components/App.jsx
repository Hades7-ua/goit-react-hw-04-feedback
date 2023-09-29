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
    return (
      <div>
        <Feedbacks
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
      </div>
    );
  }
}

export default App;

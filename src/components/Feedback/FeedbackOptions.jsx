import React from 'react';

export function Feedbacks({ options, onLeaveFeedback }) {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Feedbacks;

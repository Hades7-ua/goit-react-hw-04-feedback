import React from 'react';
import { StaticSection, Header, StatisticItem } from './Statistics.styled';
function StatisticsFeedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <StaticSection>
      <Header>Statistics</Header>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive Feedback: {positiveFeedback}%</StatisticItem>
    </StaticSection>
  );
}

export default StatisticsFeedback;

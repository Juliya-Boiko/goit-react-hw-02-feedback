import { StatisticsLabel } from './Statistics.styled';

export const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;
    return <div>
        <StatisticsLabel>Good: <span>{good}</span></StatisticsLabel>
        <StatisticsLabel>Neutral: <span>{neutral}</span></StatisticsLabel>
        <StatisticsLabel>Bad: <span>{bad}</span></StatisticsLabel>
        <StatisticsLabel>Total: <span>{total}</span></StatisticsLabel>
        <StatisticsLabel>Positive percentage: <span>{positivePercentage}%</span></StatisticsLabel>
    </div>
}
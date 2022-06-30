import 'modern-normalize';
import { Component } from 'react';
import { Container } from './common/Container.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePersentage: 0
  }

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      }
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      return {
        positivePersentage: Math.round(prevState.good * 100 / prevState.total),
      }
    })
  }

  handleClick = (evt) => { 
    const type = evt.currentTarget.getAttribute('var');
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
    return <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleClick} />
      </Section>

      <Section title="Statistics">
        <p>good: {this.state.good}</p>
        <p>neutral: {this.state.neutral}</p>
        <p>bad: {this.state.bad}</p>
        <p>total: {this.state.total}</p>
        <p>positivePersentage: {this.state.positivePersentage}</p>
      </Section>
    </Container>
  }

}

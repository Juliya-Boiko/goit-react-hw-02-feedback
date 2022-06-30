import 'modern-normalize';
import { Component } from 'react';
import { Container } from './common/Container.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

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
        {this.state.total === 0 ? <Notification message="There is no feedback" /> :           <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePersentage} />}
      </Section>
    </Container>
  }

}

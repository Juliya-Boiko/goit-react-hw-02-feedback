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
  }

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((prev, next) => prev + next, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const currentState = this.state;
    return Math.round(currentState.good * 100 / this.countTotalFeedback());
  }

  handleClick = (evt) => { 
    const type = evt.currentTarget.getAttribute('value');
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    });
  }

  render() {
    const state = this.state;
    return <Container>
       <Section title="Please leave feedback">
         <FeedbackOptions options={state} onLeaveFeedback={this.handleClick} />
       </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? 
          <Notification message="There is no feedback" /> :
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        }
      </Section>
    </Container>
  }
}

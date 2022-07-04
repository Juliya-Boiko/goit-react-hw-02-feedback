import 'modern-normalize';
import { Component } from 'react';
import { Container } from './components/common/Container.styled';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

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

  handleLeaveFeedback = (evt) => { 
    const type = evt.currentTarget.getAttribute('value');
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    });
  }

  render() {
    const state = this.state;
    return  <Container>
              <Section title="Please leave feedback">
                <FeedbackOptions options={state} onLeaveFeedback={this.handleLeaveFeedback} />
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

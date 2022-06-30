import 'modern-normalize';
import { AppContainer } from './AppContainer.styled';
import { Component } from 'react';

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
    return <AppContainer>
      <h2>Please leave feedback</h2>
      <button type="button" var="good" onClick={this.handleClick}>good</button>
      <button type="button" var="neutral" onClick={this.handleClick}>neutral</button>
      <button type="button" var="bad" onClick={this.handleClick}>bad</button>

      <h2>Statistics</h2>
      <p>good: {this.state.good}</p>
      <p>neutral: {this.state.neutral}</p>
      <p>bad: {this.state.bad}</p>
      <p>total: {this.state.total}</p>
      <p>positivePersentage: {this.state.positivePersentage}</p>
    </AppContainer>
  }

}

import React from 'react';

export class QuestionForm extends React.Component {
  state = {
    question: '',
  };

  handleInput = e => {
    const inputValue = e.currentTarget.value;
    this.setState({ question: inputValue });
  };

  handleSubmit = e => {
    e.preventDefault();

    // input reset after submit for controlled input
    this.setState({ question: '' });
    // input reset after submit for uncontrolled input
    // e.currentTarget.reset()
  };

  render() {
    const { question } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={this.handleInput}
          placeholder="Please enter your question"
        ></input>
        <button type="submit">Find the answer</button>
      </form>
    );
  }
}

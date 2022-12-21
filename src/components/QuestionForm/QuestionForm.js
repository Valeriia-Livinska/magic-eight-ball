import React from 'react';

export class QuestionForm extends React.Component {
  state = {
    input: '',
  };

  render() {
    return (
      <form>
        <input></input>
        <button type="submit">Ask a question</button>
      </form>
    );
  }
}

import * as React from 'react';

import Count from './Count';

interface Props {}

interface State {
  count: number
}

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0
  }

  increment = (): void => {
    this.setState({
      count: (this.state.count + 1)
    });
  }

  decrement = (): void => {
    this.setState({
      count: (this.state.count - 1)
    });
  }

  render() {
    return (
      <div>
        <Count count={this.state.count} />
        <button className="myButton" onClick={this.increment}>Increment</button>
        <button className="myButton" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
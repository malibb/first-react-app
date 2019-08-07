import React from 'react';

class CounterComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
     }
  }

  increment = () =>{
    this.setState((state) => {
      return {counter: state.counter + 1};
    });
  }

  decrement = () =>{
    this.setState((state) => {
      return {counter: state.counter - 1};
    });
  }
  
  
  render(){
    return (
      <React.Fragment>
        <h1>Hello {this.props.name} </h1>
        <h2>{this.state.counter}</h2>

        <button onClick={this.increment}>Aumentar</button>
        <button onClick={this.decrement}>Decrementar</button>
      </React.Fragment>
    );
  }
}

export default CounterComponent;
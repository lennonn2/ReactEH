import React from 'react';
import ReactDOM from 'react-dom';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//     this.update = this.update.bind(this);
//   }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     // Can only return a single node
//     return (
//       <div>
//         <Widget txt={this.state.txt} update={this.update} />
//       </div>
//     )
//   }
// }

// State = things that will change
// Properties = static properties
// Following 2 methods are stateless
const App = React.createClass({
  getInitialState: function() {
    return {
      red: 0,
      green: 0,
      blue: 0
    };
  },

  update: function(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  },

  componentWillMount: function() {
    console.log('mounting');
  },

  render: function() {
    console.log('rendering');
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    )
  },

  componentDidMount: function() {
    console.log('mounted');
  }
});

const Slider = React.createClass({
  render: function() {
    return (
      <div>
        <input ref="inp"
          type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    );
  }
})


// const App = () => <h1>Hello World</h1>

App.propTypes = {
  txt: React.PropTypes.string //.isRequired
};

App.defaultProps = {
  txt: 'default text'
}

export default App;

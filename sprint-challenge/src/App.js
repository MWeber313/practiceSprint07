import React from 'react';
import './App.css';
import Content from './components/Content.js'
import reactData from './data.js'

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data: reactData,
    }
  }

  render(){
  return (
    <div className="App">
      <Content contentProps={this.state.data}/>
    </div>
  );
  }
}

export default App;

import React from 'react';
import './App.css';
import Content from './components/Content.js'
import reactData from './data.js'


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data: reactData,
      isToggled: false,
    }
  }

  toggleHandler = () => {
    if (!this.state.isToggled){
      console.log(this.state.isToggled)
      this.setState({isToggled: true})
    } else {
      console.log(this.state.isToggled)
      this.setState({isToggled: false})
    }
  }

  render(){
  return (
    <div className="App">
      <Content classNameProps={this.state.isToggled} contentProps={this.state.data} buttonProps={this.toggleHandler}/>
    </div>
  );
  }
}

export default App;

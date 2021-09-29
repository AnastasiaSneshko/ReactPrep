import { Component } from "react";
import './clicker.css';

class Clicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickAmount: 0
    };
  }

  switchClick = () => {
    const{clickAmount} = this.state;
    this.setState({
      clickAmount: clickAmount + 1
    });
  }

  render(){
    const {clickAmount} = this.state;

    const button = <button className="btn" onClick={this.switchClick}>Кликни меня</button>

    return (
    <div>
      <h1 className="clickerTest">Кликнул {clickAmount} раз</h1>
      {clickAmount < 10 ? button : false}
    </div>)
  }
}

export default Clicker;
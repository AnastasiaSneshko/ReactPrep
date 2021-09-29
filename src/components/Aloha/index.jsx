import { Component } from "react";

class Aloha extends Component{
  constructor(props){
    super(props);
    this.state = {
      isGreeting: true
    };
  }

  switchState = () => {
    const {isGreeting} = this.state;
    const switchGreeting = !isGreeting;

    this.setState({
      isGreeting: switchGreeting
    })
  }

  render(){
    const {name} = this.props;
    const {isGreeting} = this.state;
    let text = isGreeting ? 'Привет' : 'Пока';
    return <div>
      <h1>{text} {name}</h1>
      <button onClick={this.switchState}>Поменять состояние</button>
    </div>
  }
}

export default Aloha;
import { Component } from 'react';
import './App.css';
import './header.css';
import batman from './img/batman.jpg';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "super",
      position: "Soz daxil edin",
      bg: "",
      color: ""
    };
  }

  yazi = () => {
    this.setState((state) => ({
      count: state.count + 1,
      text: "hello"
    }));
  }

  changeBgImg = () => {
    const { position } = this.state;
    if (position.toLowerCase() === "batman") {
      this.setState({
        bg: `url(${batman})`
      });
    } else {
      this.setState({
        bg: ""
      });
    }
  }

  changeText = (e) => {
    this.setState({
      position: e.target.value
    });
  }

  render() {
    const { name, surname, link } = this.props;
    const { count, text, position, bg, color } = this.state;

    return (
      <div className='card' style={{ backgroundImage: bg, color: color }}>
        <button onClick={this.yazi}>{text}</button>
        <button onClick={() => this.setState({ color: 'red' })}>change red</button>
        <button onClick={() => this.setState({ color: 'green' })}>change green</button>
        <button onClick={() => this.setState({ color: 'purple' })}>change purple</button>
        <h1 style={{ color: color }}>
          My name is {name}, surname is {surname}. <br /> Klik: {count}.
        </h1>
        <a href={link}>Profile</a>
        <input type="text" onChange={this.changeText} placeholder="Enter 'batman'" />
        <button onClick={this.changeBgImg}>Sekil Deyis</button>
        <p>Text: {position}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <WhoAmI name="Rza" surname="Talibov" link="www.arrow.az" />
      <WhoAmI name="Vaqif" surname="Huseynov" link="www.vaqif.az" />
    </div>
  );
}

export default App;

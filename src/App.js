import { Component } from 'react'
import './App.css'
import './header.css'





class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      text: "super",
      position: "Soz daxil edin",
      bg: "",
      color: ""
    }
  }

  kolbasa = () => {
    this.setState((state) => ({
      count: state.count + 1,
      text: "hello"
    }))
  }

  changeText = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { count, text, position, color } = this.state;

    return (
      <div className='card' style={{ background: color }}>
        <button onClick={this.kolbasa}>{text}</button>
        <button onClick={() => this.setState({ color: 'red' })}>change red</button>
        <button onClick={() => this.setState({ color: 'green' })}>change green</button>
        <button onClick={() => this.setState({ color: 'blue' })}>change blue</button>
        <h1>
          My name is {name}, surname is {surname}. <br /> Klik: {count}.
        </h1>
        <a href={link}>Profile</a>
        <input type="text" onChange={this.changeText} />
        <p>Text: {position}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <WhoAmI name="Rza" surname="Talibov" link="www.arrow.az" />
      <WhoAmI name="Vaqif" surname="Huseynov" link="www.vaqif.az" />
    </div>
  )
}

export default App;

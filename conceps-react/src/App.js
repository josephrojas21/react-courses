import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//explicacion de props, destructurin, parametros de un componente y que tipos de parametros hay 
function Hello(props) {
  return <h2>{props.title}</h2>
}

// tipos de componentes por funcion, arrow funtion y clases(componente no controlado)
const Hello2 = (props) => <h3>{props.title}</h3>

class Hello3 extends Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}

class Text extends Component {
  constructor(props){
    super(props);
    this.state = { contador: 1};
    this.state = {contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({contador: this.state.contador +1})
    },1000)
  }
  //esta froma de declar el state se le llamam classField
  //state = {nombre: 'joseph rojas montoya'}


  render() {
    const {
      isActivated,
      arrayOfNumber, 
      multiply,
      boolean,
      objectWithInfo,
      text,
      number,
      title } = this.props;
    const textoSegunBool = boolean ? 'Cierto' : 'Falso';
    const textoSegunBoo2 = isActivated ? 'papi es la monda esto' : 'Falso';
    const mapperNumbers = arrayOfNumber.map(multiply)

    return (
      <div>
        <ContadoreNumero numero={this.state.contador}/>
        <br/>
        <span>{this.state.contador}</span>
        {/* <span>{this.state.nombre}</span> */}
        {title}
        <p>{mapperNumbers.join(', ')}</p>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{textoSegunBoo2}</p>
        <p>{objectWithInfo.key}</p>


      </div>
    )
  }
}

Text.defaultProps ={
  contadorInicial : 0
}

class ContadoreNumero extends Component{
  render() {
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Hello title='welcome to reac' />
          <Hello2 title='your are the react' />
          <Hello3 title='your are the man' />
          <Text
            arrayOfNumber={[2, 3, 10]}
            objectWithInfo={{ key: 'Firstvalue', key2: 'otherValue' }}
            multiply={(number) => number * 4}
            number={2}
            text='probando los props'
            boolean={true}
            isActivated
            title={<h1>Este es el titulo</h1>}
            contadorInicial={100}
          />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import './css/App.css';
import Login from './scenes/Login'

class App extends Component {

  state={
    isLogado:false,
    usuario:{}
  }

  render() {
    return (
      <div className="App">
        <div className={'App-header'}>
          <div className={'ui container login'}>
            <h1>Profissional</h1>
            <h1 className={'colorLaranja'}>Agenda na mão</h1>
            {!this.state.isLogado && <Login/>}

          </div>
          </div>
        </div>
    );
  }
}

export default App;

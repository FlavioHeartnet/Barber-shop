import React, { Component } from 'react';
import './css/App.css';
import Login from './scenes/Login'
import CustomLoader from './scenes/Components/Loader'

class App extends Component {

  state={
    isLogado:false,
    isLoading:false,
    usuario:{},
    signUpError:'',
    isSignUpError:false
  }

  cadastrar = async (email,senha) =>{
      this.setState({
          signUpError: '',
          isSignUpError:false,
          isLoading:true

      })

      try{
          const {auth} = this.props;
          const user = await auth.createUserWithEmailAndPassword(email,senha)
          console.log(email, senha, user)
      }catch (e) {
          this.setState({
              signUpError: e.code,
              isSignUpError:true
          })
      }
      this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="App">
        <div className={'App-header'}>
          <div className={'ui container login'}>
            <h1>Profissional</h1>
            <h1 className={'colorLaranja'}>Agenda na mão</h1>
            {this.state.isLoading && <CustomLoader/>}
            {!this.state.isLogado && <Login signUpError={this.state.signUpError} cadastrar={this.cadastrar}/>}

          </div>
          </div>
        </div>
    );
  }
}

export default App;

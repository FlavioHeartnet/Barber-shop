import React, { Component } from 'react';
import './css/App.css';
import Login from './scenes/Login'
import Home from './scenes/Home'
import CustomLoader from './scenes/Components/Loader'
import Calendar from './scenes/Components/Calendar'
import Clientes from './scenes/Clientes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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

  logar = async (email,senha) =>{

      try{
          const {auth} = this.props;
          const user = await auth.signInWithEmailAndPassword(email,senha)

      }catch (e) {
          this.setState({
              signUpError: e.code,
              isSignUpError:true

          })
          console.log(this.state.signUpError)
      }

  }
    componentDidMount() {
        this.setState({ isLoading: true });

        this.props.auth.onAuthStateChanged(user =>{
            if(user)
            {
                this.setState({
                    isLogado:true,
                    user
                })

            }else{
                this.setState({
                    isLogado:false,
                    user:{}
                })

            }
            this.setState({ isLoading: false });
        })


    }

    Sair = () =>{
        const {auth} = this.props;
        auth.signOut();
    }

  render() {
    return (
      <div className="App">
        <div className={'App-header'}>
          <div className={'ui container login'}>
            <h1>Profissional</h1>
            <h1 className={'colorLaranja'}>Agenda na mão  {this.state.isLogado && <div onClick={this.Sair} className={'ui red inverted button'}>Sair</div>}</h1>
            {this.state.isLogado && 
            <Router>
                <Switch>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/agenda"} component={Calendar} />
                    <Route path={"/clientes"} component={Clientes}/>
                </Switch>   
            </Router>
            
        }
            {this.state.isLoading && <CustomLoader/>}
            {!this.state.isLogado && <Login signUpError={this.state.signUpError} logar={this.logar} cadastrar={this.cadastrar}/>}


          </div>
          </div>
        </div>
    );
  }
}

export default App;

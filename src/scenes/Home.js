import React, { Component } from 'react';
import '../css/App.css';
import Calendar from './Components/Calendar'
import Clientes from './Clientes'

class Home extends Component
{
    state ={
        telaSelecionada:""
    }

    abrirTela = (target) =>{
        this.setState({
            telaSelecionada: target
        })
    }
    render()
    {
        return(<div>

            {this.telaSelecionada == "agenda" && <Calendar/>}
            {this.telaSelecionada == "clientes" && <Clientes/>}
            {this.telaSelecionada == "" && 
            <div>
                    <h1>Escolha o que deseja fazer</h1>
                <div>
                    <button onClick={this.abrirTela("agenda")} className={'ui button fluid'}>AGENDA</button><br/>
                    <button onClick={this.abrirTela("clientes")} className={'ui button fluid'}>CLIENTES</button>
                </div>
            </div>
                }
            

        </div>)
    }
}

export default Home;


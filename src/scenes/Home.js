import React, { Component } from 'react';
import '../css/App.css';

class Home extends Component
{
    render()
    {
        return(<div>
            <h1>Escolha o que deseja fazer</h1>
            <div>
                <button className={'ui button fluid'}>AGENDA</button><br/>
                <button className={'ui button fluid'}>CLIENTES</button>
            </div>

        </div>)
    }
}

export default Home;


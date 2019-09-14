import React, { Component } from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom'

class Home extends Component
{
   
    
    render()
    {
        return(<div> 
            
            <h1>Escolha o que deseja fazer</h1>
                <div>
                    <Link to="/agenda">
                        <button  className={'ui button fluid'}>AGENDA</button><br/>
                    </Link>
                    <Link to="/clientes">
                        <button  className={'ui button fluid'}>CLIENTES</button>
                    </Link>
                    
                </div>
        </div>)
    }
}

export default Home;


import React, {Component} from 'react'
import {Form} from "semantic-ui-react";
import arrow from "../img/arrow-right.svg";
import '../css/App.css';
import Cadastro from './Cadastro'

class Login extends Component
{
    render(){
        return (
        <Form>
            <Form.Field>
                <input placeholder='Digite seu email' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Digite sua senha' type={'password'} />
            </Form.Field>
            <Form.Field>
                <div className={'columnContainer'}>
                    <div className={'alignLeft'}>Esqueceu a senha? <a className={'colorLaranja'} href="#">Clique aqui</a></div>
                    <Cadastro cadastrar={this.props.cadastrar}/>
                </div>
            </Form.Field>
            <button className={'buttonPrimary'} type='submit'>Login <img alt=""  src={arrow}/></button>
        </Form>

        )
    }
}

export default Login
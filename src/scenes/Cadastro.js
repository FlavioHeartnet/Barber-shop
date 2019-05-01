import React, { Component } from 'react';
import { Button, Header, Form, Modal,Label } from 'semantic-ui-react'
import '../css/App.css';
class Cadastro extends Component
{
    state =
        {
           senha:'',
           email:''
        }
    Handler = field => event =>{

        this.setState({
            [field]: event.target.value
        })
    }

    cadastrar = ()=>{
        this.props.cadastrar(this.state.email,this.state.senha)

    }

    render(){
        const errorMessages={
            'auth/email-already-in-use': 'Já existe este usuario cadastrado!',
            'auth/weak-password': 'Senha fraca',
            'auth/invalid-email':'Email inválido!',
        }
        return(
            <div>
                <Modal trigger={<div className={'alignRight'}>Primeiro acesso? <a className={'colorLaranja'} href="#">Clique aqui</a></div>}>
                    <Modal.Header>Cadastre-se aqui!</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Digite seus Dados</Header>
                            <Form>
                                <Form.Field>
                                    <input onChange={this.Handler('email')} placeholder='Digite seu email' />
                                </Form.Field>
                                <Form.Field>
                                    <input onChange={this.Handler('senha')} placeholder='Digite sua senha' type={'password'} />
                                </Form.Field>
                                <Button onClick={this.cadastrar()} primary >Cadastrar</Button>
                                {
                                    this.props.isSignUpError && <Label color={'red'}>{errorMessages[this.props.signUpError]}</Label>
                                }
                            </Form>

                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
export default Cadastro;

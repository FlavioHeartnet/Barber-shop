import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
class Cadastro extends Component
{
    render(){
        return(

            <div>
                <Modal trigger={<Button>Show Modal</Button>}>
                    <Modal.Header>Cadastre-se aqui!</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Digite seus Dados</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
export default Cadastro;

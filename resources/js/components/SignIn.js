import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import Particles from 'react-particles-js'
import '../../sass/signIn.css'

const particleOptions = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

const LoginForm = () => {
    return (
        <div className="login-form">
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>    
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        />
                        <Button color='teal' fluid size='large'>
                        Login
                        </Button>
                    </Segment>
                    </Form>
                    <Message>
                    New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
            </div>
    )
}

class SignIn extends Component {
    render(){
        return (
            <LoginForm />
        )
    }
}

export default SignIn
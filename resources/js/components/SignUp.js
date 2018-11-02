import React , { Component } from 'react';
import Particles from 'react-particles-js'
import { particleOptions } from './SignIn';
import { Button, Form, Grid, Header, Segment, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/signUpAction'
import '../../sass/signUp.css'
import {Link} from "react-router-dom";

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

const SignUpForm = () => {
    return (
        <div className="sign-up-form">
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>    
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Sign Up for RestoFinder
                    </Header>
                    <Form size='large'>
                    <Segment stacked>
                        <Form.Field required >
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Last Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Select fluid options={options} placeholder='Gender' label='Gender' required/>
                        <Form.Field required>
                            <label>E-mail Address</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <input placeholder='Password' type='password'/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Re-type Password</label>
                            <input placeholder='Password' type='password'/>
                        </Form.Field>
                        <Form.Field required> <Checkbox label='I agree to the Terms and Conditions' /> </Form.Field>
                        <Button color='teal' fluid size='large'>
                            <Link to='/'>Sign Up</Link>
                        </Button>
                    </Segment>
                    </Form>
                </Grid.Column>
                </Grid>
            </div>
    )
};

class SignUp extends Component {
    render(){
        return (
        <div className="sign-up-container">
            <SignUpForm />
            <Particles params={particleOptions} />              
        </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.signUp.isLoading,
        userRegistered: state.signUp.userRegistered
    }
}


export default connect(mapStateToProps, { registerUser })(SignUp)
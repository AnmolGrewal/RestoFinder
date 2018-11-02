import React , { Component } from 'react';
import Particles from 'react-particles-js'
import { particleOptions } from './SignIn';
import { Button, Form, Grid, Header, Segment, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/signUpAction'
import '../../sass/signUp.css'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class SignUp extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = { firstName: '', lastName: '', email: '', gender: '', password: '', retypedpassword: ''}
    }
    onChange(e){
        switch(e.target.name){
            case "firstName":
                this.setState({firstName: e.target.value})
                console.log(this.state.firstName)
                break
            case "lastName":
                this.setState({lastName: e.target.value})
                break
            case "email":
                this.setState({email: e.target.value})
                break
            case "gender":
                this.setState({gender: e.target.value})
                break
            case "password":
                this.setState({password: e.target.value})  
                break
            case "retyped-password":
                this.setState({retypedpassword: e.target.value})
                break
        }
    }

    onSubmit() {
        var {firstName, lastName, email, gender, password, retypedpassword } = this.state
        this.props.registerUser(firstName, lastName, email, gender, password, retypedpassword)
    }

    render(){
        var { firstName, lastName, email, gender, password, retypedpassword } = this.state
        return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>    
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Sign Up for RestoFinder
                    </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                    <Segment stacked>
                        <Form.Field required >
                            <label>First Name</label>
                            <input name='firstName' placeholder='First Name' onChange={this.onChange} value={firstName}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Last Name</label>
                            <input name='lastName' placeholder='Last Name' onChange={this.onChange} value={lastName}/>
                        </Form.Field>
                        <Form.Field required>
                            <label> Gender </label>
                            <input name='gender' options={options} placeholder='Gender' onChange={this.onChange} value={gender}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>E-mail Address</label>
                            <input name='email' placeholder='Email' onChange={this.onChange} value={email}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <input name='password' placeholder='Password' type='password'onChange={this.onChange} value={password}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Re-type Password</label>
                            <input name='retyped-password' placeholder='Password' type='password'onChange={this.onChange} value={retypedpassword}/>
                        </Form.Field>
                        <Form.Field required> <Checkbox label='I agree to the Terms and Conditions' /> </Form.Field>
                        <Button color='teal' fluid size='large'>
                        Sign Up
                        </Button>
                    </Segment>
                    </Form>
                </Grid.Column>
                </Grid>
            </div>
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
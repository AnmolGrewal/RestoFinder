import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/loginAction'
import '../../sass/signIn.css'

export const particleOptions = {
    particles: {
        number: {
        value: 6,
        density: {
            enable: true,
            value_area: 800
        }
        },
        color: {
        value: '#1b1e34'
        },
        shape: {
        type: 'polygon',
        stroke: {
            width: 0,
            color: '#000'
        },
        polygon: {
            nb_sides: 6
        },
        image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
        }
        },
        opacity: {
        value: 0.3,
        random: true,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
        }
        },
        size: {
        value: 160,
        random: false,
        anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false
        }
        },
        line_linked: {
        enable: false,
        distance: 200,
        color: '#ffffff',
        opacity: 1,
        width: 2
        },
        move: {
        enable: true,
        speed: 8,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
        onhover: {
            enable: false,
            mode: 'grab'
        },
        onclick: {
            enable: false,
            mode: 'push'
        },
        resize: true
        },
        modes: {
        grab: {
            distance: 400,
            line_linked: {
            opacity: 1
            }
        },
        bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
        },
        repulse: {
            distance: 200,
            duration: 0.4
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
        }
    },
    retina_detect: true
}

class SignIn extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = { email: '', password: ''}
    }

    onChange() {
        switch(e.target.name){
            case "email":
                this.setState({email: e.target.value})
                break
            case "password":
                this.setState({password: e.target.value})  
                break
        }
    }

    onSubmit(){
        var { email, password } = this.state
        this.props.authenticateUser(email, password)
    }

    render(){
        var { email, password } = this.state
        return (
        <div className="login-container">
            <div className="login-form">
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>    
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log In to RestoFinder
                    </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                    <Segment stacked>
                        <Form.Input name="email" fluid icon='user' iconPosition='left' placeholder='E-mail address' required onChange={this.onChange} value={email}/>
                        <Form.Input
                        name="password"
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        required
                        onChange={this.onChange}
                        value = {password}
                        />
                        <Button color='teal' fluid size='large'>
                        <Link to = '/home'> Login </Link>
                        </Button>
                    </Segment>
                    </Form>
                    <Message>
                    New to us? <Link to='/signup'> Sign Up </Link>
                    </Message>
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
        loginSucessful: state.login.loginSucessful,
        loginRejected: state.login.loginRejected,
        userDoesNotExist: state.login.userDoesNotExist,
        isLoading: state.login.isLoading
    }
}

export default connect(mapStateToProps, { authenticateUser })(SignIn)

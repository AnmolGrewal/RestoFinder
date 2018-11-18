import React , { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/signUpAction'
import '../../../sass/changepassword.css'

class ChangePassword extends Component {

    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = { currentPassword: '', newPassword: '', retypedNewPassword: ''}
    }
    onChange(e){
        switch(e.target.name){
            case "currentPassword":
                this.setState({currentPassword: e.target.value})
                break
            case "newPassword":
                this.setState({newPassword: e.target.value})
                break
            case "newPasswordRetyped":
                this.setState({retypedNewPassword: e.target.value})
                break
        }
    }
    onSubmit() {
        var { currentPassword, newPassword, retypedNewPassword } = this.state
        //TODO: EDIT THIS
        //this.props.registerUser(firstName, lastName, email, gender, password)
    }

    render(){
        var { currentPassword, newPassword, retypedNewPassword } = this.state
        return (
            <div className="change-password-container">
                <div className="change-password-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Change Password
                            </Header>
                            <Form size='large' onSubmit={this.onSubmit}>
                                <Segment stacked>
                                    <Form.Input name="currentPassword" fluid icon='locl' iconPosition='left' placeholder='Current Password' required onChange={this.onChange} value={currentPassword}/>
                                    <Form.Input
                                    name="newPassword"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='New Password'
                                    type='password'
                                    required
                                    onChange={this.onChange}
                                    value = {newPassword}
                                    />
                                    <Form.Input
                                    name="newPasswordRetyped"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Re-type New Password'
                                    type='password'
                                    required
                                    onChange={this.onChange}
                                    value = {retypedNewPassword}
                                    />
                                    <Button color='teal' fluid size='large'>
                                        Save Changes 
                                    </Button>
                                </Segment>
                                </Form>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
//TODO: Fix this State to Edit User instead of SignUP
const mapStateToProps = (state) => {
    return {
        isLoading: state.signUp.isLoading,
        userRegistered: state.signUp.userRegistered
    }
}


export default connect(mapStateToProps, { registerUser })(ChangePassword)
import React , { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Dropdown, Input } from 'semantic-ui-react'
import '../../../sass/setpreferences.css'

const foodOptions = [
    { key: 'american', text: 'American', value: 'american' },
    { key: 'chinese', text: 'Chinese', value: 'chinese' },
    { key: 'vietnamese', text: 'Vietnamese', value: 'vietnamese' },
    { key: 'singaporean', text: 'Singaporean', value: 'singaporean' },
    { key: 'indonesian', text: 'Indonesian', value: 'indonesian' },
    { key: 'malaysian', text: 'Malaysian', value: 'malaysian' },
    { key: 'hongkong', text: 'Hong Kong', value: 'hongkong' },
    { key: 'taiwanese', text: 'Taiwanese', value: 'taiwanese' },
    { key: 'korean', text: 'Korean', value: 'korean' },
    { key: 'japanese', text: 'Japanese', value: 'japanese' },
    { key: 'indian', text: 'Indian', value: 'indian' }
  ]
  

class SetPreference extends Component {
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
            <div className="set-preference-container">
                <div className="set-preference-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 350 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Set Preference
                            </Header>
                            <Form size='large' onSubmit={this.onSubmit}>
                                <Segment stacked>
                                    <Input label={{ basic: true, content: 'km' }} labelPosition='right' placeholder='Enter maximum distance from current location'/>
                                    <Dropdown style={{marginTop:"5%"}}placeholder='Cuisines' fluid multiple selection options={foodOptions} />
                                    <Button color='teal' fluid size='large' style={{marginTop:'5%'}}>
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

export default SetPreference
import React , { Component } from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../../../sass/edituser.css'

class EditUser extends Component {
    render(){
        return (
            <div className="edit-user-container">
                <div className="edit-user-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Edit Preferences And Settings
                            </Header>
                                <Segment stacked>
                                    <Link to='/home/settings/changepassword'>
                                        <Button color='teal' fluid size='large' style={{marginBottom:'5%'}}>
                                            Change My Password
                                        </Button>
                                    </Link>  
                                    <Link to='/home/settings/setpreference'>
                                        <Button color='teal' fluid size='large'>
                                            Set Preferences
                                        </Button>
                                    </Link>
                                </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}


export default EditUser
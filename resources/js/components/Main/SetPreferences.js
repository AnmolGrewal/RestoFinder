import React , { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Dropdown, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setPreference } from '../../actions/setPreferenceAction'
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
        this.onSubmit = this.onSubmit.bind(this)
        this.state = { distance: '', preference: null}
    }

    onChangeDistance(e){
        this.setState({distance: e.target.value})
    }

    onChangePreference(e, {value}){
        this.setState({preference: value})
     }

    onSubmit() {
        var { distance, preference } = this.state
        setPreference(this.props.loggedInAs, distance, preference)
    }

    render(){
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
                                    <Input onChange={this.onChangeDistance.bind(this)} label={{ basic: true, content: 'km' }} labelPosition='right' placeholder='Enter maximum distance from current location'/>
                                    <Dropdown onChange={this.onChangePreference.bind(this)} style={{marginTop:"5%"}}placeholder='Cuisines' fluid multiple selection options={foodOptions} />
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

const mapStateToProps = (state) => {
    return {
        loggedInAs: state.login.loggedInAs
    }
}


export default connect(mapStateToProps, { setPreference })(SetPreference)
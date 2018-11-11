import React, { Component } from 'react'
import { Button, Icon, Image, ButtonGroup } from 'semantic-ui-react'
import '../../../sass/sidebar.css'

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar">
                <Image className="image-avatar" src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600118/59070198-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg" size='tiny' circular/>
                <Button className='logout-button' content='Logout' color='red' fluid/>
                <Button className='search-button' fluid fitted>
                    <Icon size='huge' fitted name='food'/>
                </Button>
                <Button className='favourite-button' fluid>
                    <Icon size='huge' fitted name='favorite'/>
                </Button>
                <Button className='history-button' fluid>
                    <Icon size='huge' fitted name='history'/>
                </Button>
                <Button className='settings-button' fluid>
                    <Icon size='huge' fitted name='settings'/>
                </Button>
            </div>
        )
    }
}

export default SidebarComponent
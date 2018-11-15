import React, { Component } from 'react'
import { Button, Icon, Image, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../../../sass/sidebar.css'
import Food from './Food'

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar">
                <Image className="image-avatar" src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600118/59070198-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg" size='tiny' circular/>
                <Button className='logout-button' content='Logout' color='red' fluid/>
                <Link to="/home/search">
                    <Button className='search-button' fluid fitted='true'>
                        <Icon size='huge' fitted name='food'/>
                    </Button>
                </Link>
                <Button className='favourite-button' fluid>
                    <Icon size='huge' fitted name='favorite'/>
                </Button>
                <Button className='history-button' fluid>
                    <Icon size='huge' fitted name='history'/>
                </Button>
                <Link to="/home/settings">
                <Button className='settings-button' fluid>
                    <Icon size='huge' fitted name='settings'/>
                </Button>
                </Link>
            </div>
        )
    }
}

export default SidebarComponent
import React, { Component } from 'react'
import { Sidebar } from 'semantic-ui-react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SidebarComponent from './Sidebar'
import Food from './Food'
import Search from './Search'
import LeftContainer from '../Containers/LeftContainer'
import MainContainer from '../Containers/MainContainer'
import GoogleApiWrapper from './Map'
import { history } from '../../app'

import { updateCurrentLocation } from '../../actions/searchAction'

class Main extends Component {
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            let currentPosition = { latitude, longitude}
            this.props.updateCurrentLocation(currentPosition)
        });
    }
    render() {
        return (
            <div className="App">
            <LeftContainer>
                <Sidebar width='thin' visible={true} inverted='true' animation='push'>
                    <SidebarComponent />
                </Sidebar>
            </LeftContainer>
            <MainContainer>
                <Router history={history}>
                    <div>
                        <Route path='/home/search' exact component={Search} />
                        <Route path='/home/map' exact component={GoogleApiWrapper} />
                        <Route path='/home/settings' exact component={Food} />
                    </div>
                    </Router>
            </MainContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.search.currentLocation
    }
}
export default connect (mapStateToProps, { updateCurrentLocation }) (Main)

/*

            <div className="main-app">
                <Sidebar.Pushable>
                    <Sidebar
                    width='thin'
                    visible={true}
                    inverted='true'
                    animation='push'
                    >
                    <SidebarComponent />
                    </Sidebar>
                    <Router history={history}>
                    <Sidebar.Pusher>
                        <Route path='/home/search' exact component={Search} />
                        <Route path='/home/map' exact component={GoogleApiWrapper} />
                        <Route path='/home/settings' exact component={Food} />
                    </Sidebar.Pusher>
                    </Router>
                </Sidebar.Pushable>
            </div>

*/
import React, { Component } from 'react'
import { Sidebar, Segment } from 'semantic-ui-react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SidebarComponent from './Sidebar'
import Search from './Search'
import LeftContainer from '../Containers/LeftContainer'
import MainContainer from '../Containers/MainContainer'
import MoreInfo from './MoreInfo'
import GoogleApiWrapper from './Map'
import EditUser from './EditUser'
import SetPreference from './SetPreferences'
import ChangePassword from './ChangePassword'
import Favourites from './Favourites'
import HistorySearch from './HistorySearch'
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
        var { moreInfoVisible } = this.props
        return (
            <div className="App">
            <LeftContainer>
                <Sidebar width='thin' visible={true} inverted='true' animation='push'>
                    <SidebarComponent />
                </Sidebar>
            </LeftContainer>
            <MainContainer>
                <Sidebar.Pushable as={Segment}>
                <Sidebar
                    width='wide'
                    animation='overlay'
                    direction='right'
                    visible={moreInfoVisible}
                    icon='labeled'
                    vertical='true'
                    inverted='true'
                >
                <MoreInfo />
                </Sidebar>
                <Router history={history}>
                    <div>
                        <Route path='/home' exact component={Search} />
                        <Route path='/home/map' exact component={GoogleApiWrapper} />
                        <Route path='/home/favourites' exact component={Favourites} />
                        <Route path='/home/history' exact component={HistorySearch} />
                        <Route path='/home/settings' exact component={EditUser} />
                        <Route path='/home/settings/changepassword' exact component={ChangePassword} />
                        <Route path='/home/settings/setpreference' exact component={SetPreference} />
                    </div>
                </Router>
                </Sidebar.Pushable>
            </MainContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.search.currentLocation,
        moreInfoVisible: state.main.moreInfoVisible
    }
}
export default connect (mapStateToProps, { updateCurrentLocation }) (Main)
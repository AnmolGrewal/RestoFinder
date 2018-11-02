import React, { Component } from 'react'
import { Sidebar, Icon } from 'semantic-ui-react'
import '../../../sass/main.css'

import GoogleApiWrapper from './Map'

class Main extends Component {
    render() {
        return (
            <div className="main-app">
                <Sidebar.Pushable>
                    <Sidebar
                    width='thin'
                    visible={true}
                    inverted='true'
                    >
                    <h1> I am sidebar </h1>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <GoogleApiWrapper />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default Main
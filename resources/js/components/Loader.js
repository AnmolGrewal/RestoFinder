import React from 'react'
import { Loader as SLoader, Dimmer } from 'semantic-ui-react'

const Loader = (props) => {
    return (
        <Dimmer active>
            <SLoader size="big"> Loading ... </SLoader>
        </Dimmer>
    )
}

export default Loader
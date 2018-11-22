import React, { Component } from 'react'
import { Grid, Header, Button, Rating, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getFavourites, removeFavourites } from '../../actions/favouriteAction'
import Loader from '../Loader'
import '../../../sass/favourites.css'

class Favourites extends Component {
    componentDidMount(){
        this.props.getFavourites(this.props.loggedInAs)
    }

    removeFavourite = (restaurant) => {
        let userId = this.props.loggedInAs
        let restaurantId = restaurant.R_ID
        removeFavourites(userId, restaurantId)
    }

    render(){
        var { userFavourites, favouritesIsLoading } = this.props
        return favouritesIsLoading ? <Loader /> : (
            <div className="favourites-container">
                <div className="favourites-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Favourites
                            </Header>
                            <Table singleLine textAlign="center">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
                                        <Table.HeaderCell /> 
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {userFavourites.map((favourite) => {
                                    return (
                                    <Table.Row>
                                        <Table.Cell verticalAlign="middle"> {favourite.R_NAME} </Table.Cell>
                                        <Table.Cell verticalAlign="middle"> <Button negative size="small" onClick={this.removeFavourite.bind(this, favourite)}> Remove </Button> </Table.Cell>
                                    </Table.Row>
                                    )})
                                    }
                                </Table.Body>
                            </Table>                            
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInAs: state.login.loggedInAs,
        userFavourites: state.favourite.userFavourites,
        favouritesIsLoading: state.favourite.favouritesIsLoading
    }
}
export default connect(mapStateToProps, { getFavourites }) (Favourites)
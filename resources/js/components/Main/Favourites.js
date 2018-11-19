import React, { Component } from 'react'
import { Grid, Header, Button, Rating, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import '../../../sass/favourites.css'

class Favourites extends Component {
    render(){
        return (
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
                                        <Table.HeaderCell textAlign="center">Rating</Table.HeaderCell>
                                        <Table.HeaderCell /> 
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell verticalAlign="middle"> Bali Thai </Table.Cell>
                                        <Table.Cell verticalAlign="middle"> <Rating disabled={true} icon="star" style={{display:"block"}} maxRating={5} defaultRating={3} size="small"/> </Table.Cell>
                                        <Table.Cell verticalAlign="middle"> <Button negative size="small"> Remove </Button> </Table.Cell>
                                    </Table.Row>
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
export default connect(mapStateToProps) (Favourites)
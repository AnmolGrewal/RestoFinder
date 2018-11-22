import React, { Component } from 'react'
import { Grid, Table, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getUserHistory } from '../../actions/historyAction'
import { addFavourites } from '../../actions/favouriteAction'
import Loader from '../Loader'
import '../../../sass/historysearch.css'

class HistorySearch extends Component {
    componentDidMount(){
        this.props.getUserHistory(this.props.loggedInAs)
    }

    addFavourites = (restaurant) => {
        let userId = this.props.loggedInAs
        let restaurantId = restaurant.R_ID
        addFavourites(userId, restaurantId)
    }
    render(){
        var { userHistory, historyIsLoading } = this.props 
        return historyIsLoading ? <Loader /> : (
            <div className="history-search-container">
                <div className="history-search-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                History
                            </Header>
                            <Table singleLine textAlign="center">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign="center">Visited</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
                                        <Table.HeaderCell />
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {userHistory.map((restaurant) => {
                                        return(
                                        <Table.Row>
                                            <Table.Cell verticalAlign="middle"> {restaurant.H_DATE} </Table.Cell>
                                            <Table.Cell verticalAlign="middle"> {restaurant.R_NAME} </Table.Cell>
                                            <Table.Cell verticalAlign="middle"> <Button positive size="small" onClick={this.addFavourites.bind(this, restaurant)}> Add To Favourites </Button></Table.Cell>
                                        </Table.Row>
                                        )
                                    })
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
        userHistory: state.history.userHistory,
        historyIsLoading: state.history.historyIsLoading,
        loggedInAs: state.login.loggedInAs
    }
}
export default connect(mapStateToProps, { getUserHistory })(HistorySearch)
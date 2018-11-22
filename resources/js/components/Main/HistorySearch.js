import React, { Component } from 'react'
import { Grid, Table, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getUserHistory } from '../../actions/historyAction'
import '../../../sass/historysearch.css'

const restaurants = [
    {Visited:"14 January 2018", Name:"Bali Thai", Address:"88 West Pender St"},
    {Visited:"20 January 2018", Name:"Congee", Address:"21 West Pender St"}
]

class HistorySearch extends Component {
    componentDidMount(){
        this.props.getUserHistory(this.props.loggedInAs)
    }
    render(){
        return (
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
                                        <Table.HeaderCell textAlign="center">Address</Table.HeaderCell>
                                        <Table.HeaderCell />
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {restaurants.map((restaurant) => {
                                        return(
                                        <Table.Row>
                                            <Table.Cell verticalAlign="middle"> {restaurant.Visited} </Table.Cell>
                                            <Table.Cell verticalAlign="middle"> {restaurant.Name} </Table.Cell>
                                            <Table.Cell verticalAlign="middle"> {restaurant.Address} </Table.Cell>
                                            <Table.Cell verticalAlign="middle"> <Button positive size="small"> Add To Favourites </Button></Table.Cell>
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
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchFromFavourites, searchForRandomRestaurant } from '../../actions/searchAction'
import  Loader from '../Loader'
import '../../../sass/search.css'



class Search extends Component {
    onClickRandom = () => {
        this.props.searchForRandomRestaurant(this.props.loggedInAs, this.props.currentLocation)
    }

    onClickFavourites = () => {
        console.log("Search from favorites")
        this.props.searchFromFavourites(this.props.loggedInAs)
    }

    render(){
        return this.props.currentLocation? (
            <div className="search-container">
                <Button className="random-button" color="teal" size="massive" onClick={this.onClickRandom}> Find Nearby Restaurant </Button>
                <Button className="fav-button" color="teal" size="massive" onClick={this.onClickFavourites}> Select From Favourites </Button>
            </div>
        ) : <Loader />
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.search.currentLocation,
        searchLoading: state.search.searchLoading,
        restaurantsNearby: state.search.restaurantsNearby,
        loggedInAs: state.login.loggedInAs
    }
}

export default connect(mapStateToProps, {searchForRandomRestaurant, searchFromFavourites})(Search)
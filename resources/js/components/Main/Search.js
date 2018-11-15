import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { searchFromFavourites, searchForRandomRestaurant } from '../../actions/searchAction'

class Search extends Component {
    constructor(){
        super()
        this.onClickFavourites = this.onClickRandom.bind(this)
        this.onClickRandom = this.onClickRandom.bind(this)
    }
    onClickRandom(){
        this.props.searchForRandomRestaurant(this.props.currentLocation)
    }

    onClickFavourites(){

    }

    render(){
        return (
            <div className="search-button">
                <Button size="massive" onClick={this.onClickRandom}> Find Nearby Restaurant </Button>
                <Button size="massive"> Select From Favourites </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.search.currentLocation,
        searchLoading: state.search.searchLoading,
        restaurantsNearby: state.search.restaurantsNearby
    }
}

export default connect(mapStateToProps, {searchForRandomRestaurant, searchFromFavourites})(Search)
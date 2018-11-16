import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchFromFavourites, searchForRandomRestaurant } from '../../actions/searchAction'
import { particleOptions } from '../SignIn'
import Particles from 'react-particles-js'
import '../../../sass/search.css'



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
            <div className="search-container">
                <Button className="random-button" color="teal" size="massive" onClick={this.onClickRandom}> Find Nearby Restaurant </Button>
                <Button className="fav-button" color="teal" size="massive"> Select From Favourites </Button>
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
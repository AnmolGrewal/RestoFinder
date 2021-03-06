import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMoreInfo } from '../../actions/mainAction'
import { searchForRandomRestaurant, searchFromFavourites } from '../../actions/searchAction'
import { Icon, Divider, Image, Header, Rating, Button } from 'semantic-ui-react'
import { addUserHistory } from '../../actions/historyAction'
import { addFavourites } from '../../actions/favouriteAction'
import "../../../sass/moreinfo.css"

class MoreInfo extends Component {
    constructor (){
        super()
        this.onClick = this.onClick.bind(this)
        this.searchRandom = this.searchRandom.bind(this)
        this.naviagteToRestaurant = this.naviagteToRestaurant.bind(this)
    }
    naviagteToRestaurant(){
        let {latitude,longitude} = this.props.restaurantsNearby.coordinates
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank')
        addUserHistory(this.props.loggedInAs, this.props.restaurantsNearby.id)
    }   

    searchRandom(){
        this.props.searchForRandomRestaurant(this.props.loggedInAs, this.props.currentLocation)
    }

    searchFavorite = () => {
        this.props.searchFromFavourites(this.props.loggedInAs)
    }

    onClick() {
        this.props.toggleMoreInfo()
    }

    markAsFavourite = () => {
        console.log("Clicked")
        let userId = this.props.loggedInAs
        let restaurantId = this.props.restaurantsNearby.id
        addFavourites(userId, restaurantId)
    }

    render(){
        if(this.props.restaurantsNearby) {
            console.log(this.props.restaurantsNearby)
            var { categories , image_url, location, name, phone, rating, id } = this.props.restaurantsNearby
            var address = location.display_address.join("  ")
            var cuisine = ""
            categories.forEach(category => {
              cuisine = cuisine + category.title + " , "  
            })
            cuisine = cuisine.replace(/,\s*$/, "");
        }
        return this.props.restaurantsNearby ? (
            <div className="more-info">
                <Button icon onClick={this.onClick} className="minimize-more-info">
                    <Icon className="toggle-icon" name="angle double right" size="large"/>
                </Button>
                <Divider style={{marginBottom:"0"}}/>
                <Image className="restaurant-picture" src={image_url} fluid rounded style={{maxWidth:'350px', maxHeight:'250px'}}/>
                <Header style={{color:"#d9d9d9", textAlign:"center"}} as='h1'> {name} </Header>
                <div style={{display: "block"}}>
                    <Icon style={{color:"#d9d9d9"}} name="address book outline" size="large" /> 
                    <Header as='h6' style={{color:"#d9d9d9" , display:"inline"}}> 
                        {address} 
                    </Header>
                </div>
                <div style={{display:"block", marginBottom: "7%"}}>
                    <Icon style={{color:"#d9d9d9"}} name="food" size="large" /> 
                    <Header as='h5' style={{color:"#d9d9d9", display:"inline-block"}}> 
                        {cuisine} 
                    </Header>
                </div>
                <div style={{display:"block", marginBottom: "7%"}}>
                    <Icon style={{color:"#d9d9d9"}} name="phone" size="large" /> 
                    <Header as='h5' style={{color:"#d9d9d9", display:"inline"}}> 
                        {phone} 
                    </Header>
                </div>
                <div style={{display:"block"}}>
                    <Rating disabled={true} icon="star" style={{display:"block"}} maxRating={5} defaultRating={rating} size="massive"/>
                </div>
                <Button.Group fluid={true} widths={4} style={{bottom:"0", position:"fixed"}}>
                    <Button onClick={this.naviagteToRestaurant}> Navigate Here </Button>
                    <Button onClick={this.searchRandom}> Find Another </Button>
                    <Button onClick={this.searchFavorite}> Find From Favourites </Button>
                    <Button onClick={this.markAsFavourite}> Add To Favourites </Button>
                </Button.Group>
            </div>
        ) : null
    } 
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.search.currentLocation,
        restaurantsNearby: state.search.restaurantsNearby,
        moreInfoVisible: state.main.moreInfoVisible,
        loggedInAs: state.login.loggedInAs
    }
}

export default connect (mapStateToProps, { toggleMoreInfo, searchForRandomRestaurant, searchFromFavourites }) (MoreInfo)
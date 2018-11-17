import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMoreInfo } from '../../actions/mainAction'
import { Icon, Divider, Image, Header, Rating, Button } from 'semantic-ui-react'
import "../../../sass/moreinfo.css"

class MoreInfo extends Component {
    constructor (){
        super()
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.toggleMoreInfo()
    }

    render(){
        if(this.props.restaurantsNearby) {
            var { categories , image_url, location, name, phone, rating } = this.props.restaurantsNearby
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
                <Image className="restaurant-picture" src={image_url} fluid rounded/>
                <Header style={{color:"#d9d9d9", textAlign:"center"}} as='h1'> {name} </Header>
                <Icon style={{color:"#d9d9d9"}} name="address book outline" size="large" /> <Header as='h6' style={{color:"#d9d9d9" , display:"inline"}}> {address} </Header>
                <br/>
                <Icon style={{color:"#d9d9d9"}} name="food" size="large" /> <Header as='h5' style={{color:"#d9d9d9", display:"inline-block"}}> {cuisine} </Header>
                <br/>
                <br/>
                <Icon style={{color:"#d9d9d9"}} name="phone" size="large" /> <Header as='h5' style={{color:"#d9d9d9", display:"inline"}}> {phone} </Header>
                <br/>
                <br/>
                <Rating disabled={true} icon="star" style={{display:"block"}} maxRating={5} defaultRating={rating} size="massive"/>
            </div>
        ) : null
    } 
}

const mapStateToProps = (state) => {
    return {
        restaurantsNearby: state.search.restaurantsNearby,
        moreInfoVisible: state.main.moreInfoVisible
    }
}

export default connect (mapStateToProps, { toggleMoreInfo }) (MoreInfo)
import React, {Component} from 'react';
import './card.css';

class CardDeezer extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'ver mas',
            viewMore: false,
        }
    }

    render(){
        return (
            <div className = "canciones-card">
                <img src='' alt=""/>
                <h3> 'nombre' </h3>
                <p> 'artista' </p>
            </div> 
            )
        } 
    }  

export default CardDeezer 
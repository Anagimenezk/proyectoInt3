import React, {Component} from 'react';
import './card.css';

class CardDeezer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <section className="card-container">
                    <article>
                        <section class="navigation">
                            <div>
                                <i className="fas fa-chevron-left"></i>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <i className="far fa-window-close"></i>
                        </section>
                    
                            <img src={this.props.dataAlbum.cover_medium} alt="foto"/>
                            <h3> {this.props.dataAlbum.title} </h3>
                            <p class="description">{this.props.dataAlbum.position}</p>
                            <section className="aditional-info">
                                <p>{this.props.dataAlbum.artist.name}</p>
                                <p>{this.props.dataAlbum.record_type}</p>
                                <p>{this.props.dataAlbum.explicit_lyrics}</p>
                            </section>
                    <p>VER MAS</p>
                    </article> 
                </section>
            )
        } 
    }  

export default CardDeezer 
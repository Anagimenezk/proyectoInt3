import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <section className="album-card" >
                    <article>
                        <section className="navigation">
                            <div>
                                <i className="fas fa-chevron-left"></i>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <i className="far fa-window-close"> Borrar </i>
                        <div>
                        <img src={this.props.dataAlbum.cover_medium} alt="foto"/>
                            <h3> {this.props.dataAlbum.title} </h3>
                            <p className="description">{this.props.dataAlbum.position}</p>
                        <section className="aditional-info">
                                <p>{this.props.dataAlbum.artist.name}</p>
                                <p>{this.props.dataAlbum.record_type}</p>
                                <p>{this.props.dataAlbum.explicit_lyrics}</p>
                        </section>
                        <p>VER MAS</p>
                        </div>
            </section>
                    
                            
                    </article> 
                </section>
            )
        } 
    }  

export default Card; 
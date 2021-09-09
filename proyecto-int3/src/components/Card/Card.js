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
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                            <section className="aditional-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            </section>
                    <p>VER MAS</p>
                    </article> 
                </section>
            )
        } 
    }  

export default CardDeezer 
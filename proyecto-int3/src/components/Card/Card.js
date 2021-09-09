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
                    
                            <img src="./img/image-default.png" alt=""> </img>
                            <h3>Título/ Nombre</h3>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                            <section className="aditional-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            </section>
                    <a href="">Ver más</a>
                    </article> 
                </section>
            )
        } 
    }  

export default CardDeezer 
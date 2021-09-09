import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'ver mas',
            viewMore: false,
        }
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                text:'ver mas',
                viewMore: false
            })
        } else {
            this.setState({
                text:'ver menos',
                viewMore: true
            })
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
                            <i className="far fa-window-close" onClick={()=>this.props.remove(this.props.dataAlbum.id)}> </i>
                        <div>
                        <img src={this.props.dataAlbum.cover_medium} alt="foto"/>
                            <h3> {this.props.dataAlbum.title} </h3>
                            <p className="description"> Ranking: {this.props.dataAlbum.position}</p>
                        <section className= {`aditional-info ${this.state.viewMore ? 'show': 'hide'}`}>
                                <p>{this.props.dataAlbum.artist.name}</p>
                                <p>{this.props.dataAlbum.record_type}</p>
                        </section>
                        <p className='more' onClick={()=> this.viewMore()}>{this.state.text}</p>
                        </div>
            </section>
                    
                            
                    </article> 
                </section>
            )
        } 
    }  

export default Card; 
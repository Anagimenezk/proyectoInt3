import React, {Component} from 'react';
import Card from '../Card/Card';
import './main.css'

class Main extends Component {
    constructor(){
        super()
        this.state={
           tracks: [],

        }
    }

    componentDidMount(){
        console.log( 'montado')
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10';

        fetch(url)
        .then (response => response.json())
        .then (data => {
            console.log(data)
            this.setState({
                tracks: data.data 
            })
        }).catch(error=> console.log(error))
    }

    render(){
        return(
            <React.Fragment>
            <main>
                <button type="button">Cargar más tarjetas</button>
               <Card/>
            </main>

            {this.state.tracks.map((cancion, idx) => 
            <Card dataCancion={cancion} key={idx} />)}


            </React.Fragment>
        )
    }   
}

export default Main
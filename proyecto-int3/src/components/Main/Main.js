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
//guardar numero del enpdpoint en el estado, asi cada vez que carga el load more, ese estado pasa de 10 a 20, y asi 
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
             
            </main>

            {this.state.tracks.map((cancion, idx) => 
            <Card dataCancion={cancion} key={cancion + idx} />)}


            </React.Fragment>
        )
    }   
}

export default Main
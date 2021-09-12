import React, {Component} from 'react';
import Card from '../Card/Card';
import './main.css'


class Main extends Component {
    constructor(){
        super()
        this.state={
           albumes: [],
           albumesIniciales: [],
           isLoaded: false, 
           nextUrl:'',
           changeOrientation: false,
           text: 'Cambiar orientacion',

        }
    }

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10';
//guardar numero del enpdpoint en el estado, asi cada vez que carga el load more, ese estado pasa de 10 a 20, y asi 
        fetch(url)
        .then (response => response.json())
        .then (data => {
            console.log(data)
            this.setState({
                albumes: data.data, 
                albumesIniciales: data.data,
                isLoaded: true,
            })
        }).catch(error=> console.log(error))
    }

    deleteCard(albumABorrar){
        let albumesQueQuedan = this.state.albumes.filter (album => 
            album.id !== albumABorrar);

            this.setState({
                albumes: albumesQueQuedan
            })
    }

    changeOrientation(){
        if(this.state.changeOrientation){
            this.setState({
                text: 'Orientacion columna',
                changeOrientation: false
            })
        } else{
            this.setState({
                text:'Orientacion filas',
                changeOrientation: true
            })
        }
    }
   //HAY ALGO QUER NO ESTA ANDANDO, NO TIRA ERRO EPRO CUANDO APRETAS NO CAMBIA LA ORIENTACION
   

    render(){
        return(
            <React.Fragment>
               
            <main>
                <button type="button">Cargar más tarjetas</button>  
                <button type="button" onclick={ ()=> this.changeOrientation()}>{this.state.text}</button> 
             
            <div className= {`card-container ${this.state.changeOrientation ? 'column' : 'row'}`} >
            {
                this.state.isLoaded === false ?
                <p>Cargando...</p> :
            this.state.albumes.map((album, idx)=> 
            <Card dataAlbum={album} key={album.id} remove={(albumABorrar)=>this.deleteCard(albumABorrar)}/>)
            }
            </div>

            

            </main>
            </React.Fragment>
        )
    }   
}

export default Main
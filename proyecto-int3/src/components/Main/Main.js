import React, {Component} from 'react';
import Card from '../Card/Card';
import './main.css'
import Header from '../Header/Header';


class Main extends Component {
    constructor(){
        super()
        this.state={
           albumes: [],
           albumesIniciales: [],
           isLoaded: false, 
           nextUrl:'',
           changeOrientation: false,
            text:'fa-align-justify',
           resultsPerPage: 10,

        }
    }

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=' + this.state.resultsPerPage;
//guardar numero del enpdpoint en el estado, asi cada vez que carga el load more, ese estado pasa de 10 a 20, y asi 
        fetch(url)
        .then (response => response.json())
        .then (data => {
            console.log(data)
            this.setState({
                albumes: data.data, 
                albumesIniciales: data.data,
                isLoaded: true,
                resultsPerPage: this.state.resultsPerPage ,
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
                text: 'fa-align-justify',
                changeOrientation: false
            })
        } else{
            this.setState({
                text:'fa-th',
                changeOrientation: true
            })
        }
    }
   //HAY ALGO QUER NO ESTA ANDANDO, NO TIRA ERRO EPRO CUANDO APRETAS NO CAMBIA LA ORIENTACION
   //YA LO ARREGLEEE!!
   
   addMore(){

       let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=' + this.state.resultsPerPage;
       
       fetch(url)
        .then (response => response.json())
        .then (data => {
        console.log(data)
        this.setState({
            albumes: this.state.albumes.concat(data.data),
            nextUrl: this.state.resultsPerPage + 10,

        })
        
        }).catch(error=> console.log(error))

   }

    filtrarAlbumes(textoAFiltrar){
        let albumesFiltrados = this.state.albumesIniciales.filter (album=> 
        album.title.toLowerCase().includes(textoAFiltrar.toLowerCase()));

        this.setState({
            albumes: albumesFiltrados
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header filtrarAlbumes={(textoAFiltrar)=> this.filtrarAlbumes(textoAFiltrar)}/>  
               <h4> ALBUMES POPULARES </h4>
            <main>
                <div className="subtitulo">
                <button className="cargartarjetas" type="button" onClick={ () => this.addMore()}>Cargar más tarjetas</button>  
                <i type="button" onClick={ ()=> this.changeOrientation()} className= {`fas ${this.state.text}`}></i> 
                </div>
             
             
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
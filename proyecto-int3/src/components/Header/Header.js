import React, {Component} from 'react';
import './header.css'
import FilterField from '../FilterField/FilterField'


class Header extends Component {
    constructor(){
        super()
        this.state={
            albumes: [],
            albumesIniciales: [],
            isLoaded: true,

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
              
          <header>
            <h1>Título/ Nombre de la app</h1>
             <section>
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>

                    <div className=" card-container">
                    <FilterField filtrarAlbumes={
                        (textoAFiltrar)=> this.filtrarAlbumes(textoAFiltrar)}/>
                    </div>
                    
             </section>
        </header>
        </React.Fragment>
    
            )
        }
    }


export default Header



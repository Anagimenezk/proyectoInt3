import React, {Component} from 'react';
import './header.css';


class Header extends Component {
    constructor(){
        super()
        this.state={
            filterBy:'',

        }
    }

//     componentDidMount(){
//         let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10';
// //guardar numero del enpdpoint en el estado, asi cada vez que carga el load more, ese estado pasa de 10 a 20, y asi 
//         fetch(url)
//         .then (response => response.json())
//         .then (data => {
//             console.log(data)
//             this.setState({
//                 albumes: data.data, 
//                 albumesIniciales: data.data,
//                 isLoaded: true,
//             })
//         }).catch(error=> console.log(error))
//     }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando envio')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, ()=> this.props.filtrarAlbumes(this.state.filterBy))
    }

//ESTA TERMINADO PEOR HAY ALGO QUE NO ESTA ANDANDO, IGUALMENTE NO TIRA ERROR 
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
                    <form action="" onSubmit = {(event)=> this.evitarSubmit(event)} >
                        <input type="text" id="" placeholder="Buscar Album"  
                        onChange={(filtro)=> this.controlarCambios(filtro)} value={this.state.filterBy}/>
                        
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                   
                    </div>
                    
             </section>
        </header>
        </React.Fragment>
    
            )
        }
    }


export default Header



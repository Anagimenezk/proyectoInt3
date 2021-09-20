import React, {Component} from 'react';
import './header.css';



class Header extends Component {
    constructor(){
        super()
        this.state={
            filterBy:'',

        }
    }

    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando envio')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, ()=> this.props.filtrarAlbumes(this.state.filterBy))
    }


    render(){
        return(
            <React.Fragment>
              
          <header>
            <h1> <i className="fas fa-record-vinyl"></i> TUNEZAP</h1>
             <section>
                    <p className="ordenar"> Ordenar ASC/DESC</p>
                   

                    <div className="buscador">
                    <form className = "formBuscador" action="" onSubmit = {(event)=> this.evitarSubmit(event)} >
                        <input className = "input-text" type="text" id="" placeholder="Buscar Album"  
                        onChange={(filtro)=> this.controlarCambios(filtro)} value={this.state.filterBy}/>
                        
                        <button type="submit" className = "botonBuscador"><i className="fas fa-search"></i></button>
                    </form>
                   
                    </div>
                    
             </section>
        </header>
        </React.Fragment>
    
            )
        }
    }


export default Header



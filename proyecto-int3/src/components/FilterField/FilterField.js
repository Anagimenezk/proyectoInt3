import React, {Component} from 'react'

class Filtro extends Component{
    constructor(){
        super()
        this.state={
            filterBy: ''
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
            <form action="" onSubmit = {(event)=> this.evitarSubmit(event)} >
            <input type="text" id="" placeholder="Buscar Album"  
            onChange={(filtro)=> this.controlarCambios(filtro)} value={this.state.filterBy}/>
            
            <button type="submit"><i className="fas fa-search"></i></button>
        </form>
        )
    }
}

export default Filtro;
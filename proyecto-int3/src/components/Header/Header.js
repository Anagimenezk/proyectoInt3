import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    constructor(){
        super()
        this.state={
            filtrBy:'',

        }
    }
   

    render(){
        return(
          <header>
            <h1>Título/ Nombre de la app</h1>
             <section>
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form action="" >
                        <input type="text" id="" placeholder="Buscar Album" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
             </section>
        </header>
            )
        }
    }


export default Header



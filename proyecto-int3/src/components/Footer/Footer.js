import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    
    render(){
        return(
            <footer>
                <ul className="team">
                    <li>Ana Gimenez</li>
                    <li>Daira Sapir</li>
                    <li>Cala Ruggeri</li>
                </ul>
            </footer>
        )
    }
}

export default Footer
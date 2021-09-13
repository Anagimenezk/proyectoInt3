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
                    <h3> <i class="fas fa-record-vinyl"></i> TUNEZAP</h3>
                    <li>by: Ana Gimenez</li>
                    <li>Daira Sapir</li>
                    <li>Cala Ruggeri</li>
                </ul>
            </footer>
        )
    }
}

export default Footer
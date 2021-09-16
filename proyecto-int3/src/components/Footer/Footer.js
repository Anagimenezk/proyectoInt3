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
                <h3> <i className="fas fa-record-vinyl"></i> TUNEZAP</h3>
                <ul className="team">
                    <li>by: Ana Gimenez, Daira Sapir and Cala Ruggeri</li>
                </ul>
            </footer>
        )
    }
}

export default Footer
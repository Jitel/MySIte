import React, {Component} from 'react';
//import logo from './logo.svg';
import './Map.css';

class Map extends Component {
    render() {
        return (
            <div className="Map">
                <a href="https://vk.com/jitel_g" className="company">Контакты</a>
                <p className="company">jitel company</p>
                <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
            </div>

        )
    }
}

export default Map;

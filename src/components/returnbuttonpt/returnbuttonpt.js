import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './returnbuttonpt.css'

class ReturnButtonPt extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            justCliked: false,
            imgsrc : '/arquivos/return-btn.png?v=636032284184500000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc: '/arquivos/return-btn-pressed.png?v=636029916698230000'
        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return <div className="return-btn" id="return-btn-pt">
            <Link to='/'>
                <img alt="Retornar" id="img-btn-return-pt" onClick={this.handleClick} src ={"http://www.zeedog.com.br"+this.state.imgsrc} />       
            </Link>
        </div>
    }
}

export default ReturnButtonPt;

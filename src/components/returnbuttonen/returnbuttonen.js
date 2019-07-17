import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './returnbuttonen.css'

class ReturnButtonEn extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            justCliked: false,
            imgsrc : '/arquivos/return-btn-en.png?v=636029923748900000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc: '/arquivos/return-btn-en-pressed.png?v=636029916687870000'
        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return <div className="return-btn" id="return-btn-en">
            <Link to='/'>
                <img alt="Retornar" id="img-btn-return-en" onClick={this.handleClick} src ={"http://www.zeedog.com.br"+this.state.imgsrc} />       
            </Link>
        </div>
    }
}

export default ReturnButtonEn;

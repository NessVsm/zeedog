import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './../helpbuttonpt/helpbuttonpt.css'

class HelpButtonPt extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state= {
            justClicked: false,
            imgsrc : '/arquivos/button-pt.png?v=636028946637270000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc : '/arquivos/button-pt-pressed.png?v=636028946641070000'

        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return(
            <div className="btn-sizechart" id="btn-sizechart-pt">
                <Link to='/racas'>
                    <img alt="Clique aqui" id="img-btn-PT" onClick={this.handleClick} src = {"https://www.zeedog.com.br"+this.state.imgsrc} />       
                </Link> 
            </div>
        )
    }
}

export default HelpButtonPt;
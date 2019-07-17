import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './../helpbuttonen/helpbuttonen.css'

class HelpButtonEn extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state= {
            justClicked: false,
            imgsrc : '/arquivos/button-en.png?v=636028946644730000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc : '/arquivos/button-en-pressed.png?v=636028946648570000'

        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return(
            <div className="btn-sizechart" id="btn-sizechart-EN">
                <Link to="/breeds">  
                    <img alt="Click here" id="img-btn-EN" src = {"https://www.zeedog.com.br"+this.state.imgsrc} />       
                </Link>
            </div>
        )
    }
}

export default HelpButtonEn;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './petinfoen.css'

class PetInfoEn extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            name_en: this.props.info.breed.en_name,
            image: this.props.info.breed.imageIpad,
            justCliked: false,
            imgsrc : '/arquivos/return-btn-2-en.png?v=636028946083630000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc: '/arquivos/return-btn-2-en-pressed.png?v=636029916668900000'
        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return(

            <section className="pet-info-en">
                <div id="balloon-size">
                    <img id="disclaimer-breed-en" className="disclaimer-breed" alt="Dogs of the same breed may vary in size" src="https://zeedog.vteximg.com.br/arquivos/disclaimer-en-breed.png?v=636029032841300000"/> 
                </div>
                <div id="en-back-button-form">
                    <Link to ='/breeds'> <img id="return-btn-breed-en" className="return-btn-breed" alt="Choose another breed" onClick={this.handleClick} src ={"http://www.zeedog.com.br"+this.state.imgsrc} /></Link>
                </div>
                <div id="dog-img">
                    <div id="pet-name-en">
                        <span id="pet-breed">{this.state.name_en}</span><br />
                        <span id="pet-breed-disclaimer-text"> Or similar size </span>
                    </div>
                    <div id="dog-pet-img">
                        <img alt={this.state.name_en} src={"https://www.zeedog.com.br/arquivos"+this.state.image} />
                    </div>
                </div>
            </section>
            )
    }
}

export default PetInfoEn;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './petinfopt.css'

class PetInfoPt extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            name_pt: this.props.info.breed.pt_name,
            image: this.props.info.breed.imageIpad,
            justCliked: false,
            imgsrc : '/arquivos/return-btn-2.png?v=636028946079400000'
        }
    }

    handleClick(){
        this.setState({
            justClicked: true,
            imgsrc: '/arquivos/return-btn-2-pressed.png?v=636029916677670000'
        })

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        return(

            <section className="pet-info-pt">
                <div id="balloon-size">
                    <img id="disclaimer-breed-pt" className="disclaimer-breed" alt="Cães da mesma raça podem usar tamanhos diferentes. Pense nisso!" src="https://zeedog.vteximg.com.br/arquivos/disclaimer-br-breed.png?v=636028946631600000"/> 
                </div>
                <div id="pt-back-button-form">
                    <Link to ='/racas'> <img id="return-btn-breed-pt" className="return-btn-breed" alt="Escolher outra raça" onClick={this.handleClick} src ={"http://www.zeedog.com.br"+this.state.imgsrc} /></Link>
                </div>
                <div id="dog-img">
                    <div id="pet-name-pt">
                        <span id="pet-breed">{this.state.name_pt}</span><br />
                        <span id="pet-breed-disclaimer-text"> Ou porte parecido </span>
                    </div>
                    <div id="dog-pet-img">
                        <img alt={this.state.name_pt} src={"https://www.zeedog.com.br/arquivos"+this.state.image} />
                    </div>
                </div>
            </section>
            )
    }
}

export default PetInfoPt;
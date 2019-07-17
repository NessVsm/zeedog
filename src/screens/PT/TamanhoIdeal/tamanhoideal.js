import React, { Component } from 'react'
import PetInfoPt from './../../../container/petinfopt/petinfopt'
import SizeInfoPt from './../../../container/sizeinfopt/sizeinfopt'

import  './tamanhoideal.css'
class TamanhoIdeal extends Component{
    constructor(props){
        super(props);

        this.state ={
            breed_info: this.props.location.state
        }
    }
    render(){
        return(
            <section className="tamanho-ideal">
                <PetInfoPt info={this.state.breed_info} />
                <SizeInfoPt info={this.state.breed_info}/>
            </section>
        )
    }
}

export default TamanhoIdeal
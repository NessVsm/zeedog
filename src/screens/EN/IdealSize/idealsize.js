import React, { Component } from 'react'
import PetInfoEn from './../../../container/petinfoen/petinfoen'
import SizeInfoEn from './../../../container/sizeinfoen/sizeinfoen'

import  './idealsize.css'
class IdealSize extends Component{
    constructor(props){
        super(props);

        this.state ={
            breed_info: this.props.location.state
        }
    }
    render(){
        return(
            <section className="ideal-size">
                <PetInfoEn info={this.state.breed_info} />
                <SizeInfoEn info={this.state.breed_info}/>
            </section>
        )
    }
}

export default IdealSize
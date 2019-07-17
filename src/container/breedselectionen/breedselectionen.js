import React, { Component } from 'react';
import ApiSearch from './../../services/apisearch/apisearch'
import'./breedselectionen.css';

class BreedSelectionEn extends Component{
    render(){
        return (
            <div className="breed-selection-en">
                <div className="form-text-en">
                    <p className="form-tittle" id="form-title-en"> Find out what sizes fit your dog best </p>  
                </div>
                <div className="form-select-en">
                    <ApiSearch language={this.props.language}/>
                </div>
            </div>
        )
    }
}

export default BreedSelectionEn;
import React, { Component } from 'react';
import ApiSearch from './../../services/apisearch/apisearch'
import'./breedselectionpt.css';

class BreedSelectionPt extends Component{
    render(){
        return (
            <div className="breed-selection-pt">
                <div className="form-text-pt">
                    <p className="form-tittle" id="form-title-pt"> Descubra o tamanho ideal </p>  
                    <p className="form-subtitle" id="form-subtitle-pt"> Veja o que os cachorros da mesma raça usam </p>     
                </div>
                <div className="form-select-pt">
                    <ApiSearch language={this.props.language}/>
                </div>
            </div>
        )
    }
}

export default BreedSelectionPt;
import React, { Component } from 'react' 
import ReturnButtonPt from './../../../components/returnbuttonpt/returnbuttonpt'
import BreedSelectionPt from './../../../container/breedselectionpt/breedselectionpt'
import MuttBalloonPt from './../../../components/muttballoonpt/muttballoonpt';

import './../Racas/racas.css'

class Racas extends Component{
    render(){
        return(
            <section className="racas" id="racas-selecao">
                <div className="pet-form-container" id="form-container-pt"> 
                    <ReturnButtonPt />
                    <BreedSelectionPt language={'PT'} />
                    <MuttBalloonPt />
                </div>
            </section>
        )
    }
}

export default Racas
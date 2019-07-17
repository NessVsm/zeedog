import React, { Component } from 'react' 
import ReturnButtonEn from './../../../components/returnbuttonen/returnbuttonen'
import BreedSelectionEn from './../../../container/breedselectionen/breedselectionen'
import MuttBalloonEn from './../../../components/muttballoonen/muttballoonen';

import './../Breeds/breeds.css'

class Breeds extends Component{
    render(){
        return(
            <section className="breeds">
                <div className="pet-form-container" id="form-container-en"> 
                    <ReturnButtonEn />
                    <BreedSelectionEn language={'EN'}/>
                    <MuttBalloonEn />
                </div>
            </section>
        )
    }
}

export default Breeds
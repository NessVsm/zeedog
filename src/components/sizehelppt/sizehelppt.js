import React, { Component } from 'react'
import HelpButtonPt from './../helpbuttonpt/helpbuttonpt';
import './../sizehelppt/sizehelppt.css'

class SizeHelpPt extends Component{
    render(){
        return(
            <section className="size-help" id="size-help-pt">
                <div id="pt-br-container">
                    <div id="pt-br-container-center">
                        <p id="pt-container-lang"  className="pt-container-text"> PT </p>
                        <p id="pt-container-title" className="pt-container-text"> Tá com dúvida no tamanho?</p>
                        <p id="pt-container-help"  className="pt-container-text"> Relaxa que a gente te ajuda!</p>
                        <HelpButtonPt />
                    </div>
                </div>
            </section>
        )
    }
}

export default SizeHelpPt;
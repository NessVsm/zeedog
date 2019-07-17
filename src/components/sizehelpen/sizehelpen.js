import React, { Component } from 'react'
import HelpButtonEn from './../helpbuttonen/helpbuttonen'
import './../sizehelpen/sizehelpen.css'

class SizeHelpEn extends Component {
    render(){
        return(
            <section className="size-help" id="size-help-en">
                <div id="en-container">
                    <div id="en-container-center">
                        <p id="en-container-lang"  className="en-container-text"> EN </p>
                        <p id="en-container-title" className="en-container-text"> Not sure about the size?</p>
                        <p id="en-container-help"  className="en-container-text"> No worries, we'll help you!</p>
                        <HelpButtonEn />
                    </div>
                </div>
            </section>
        )
    }
}

export default SizeHelpEn;
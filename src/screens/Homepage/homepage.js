import React, { Component } from 'react';
import SizeHelpPt from './../../components/sizehelppt/sizehelppt';
import SizeHelpEn from './../../components/sizehelpen/sizehelpen';
import './homepage.css';



class Homepage extends Component{
    render(){
        return (
            <section className="home-page">
                <div className="container" id="boxes-container">
                    <SizeHelpPt />
                    <SizeHelpEn />
                </div>
            </section>
        )
    }
}
export default Homepage;
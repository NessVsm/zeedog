import React, { Component } from 'react'

import './sizeinfoen.css'

class SizeInfoEn extends Component{
    constructor(props){
        super(props);

        this.state = {
            name_en: this.props.info.breed.en_name,
            leash:this.props.info.breed.leash[1],
            collar:this.props.info.breed.collar[1],
            leash_ruff: this.props.info.breed.leash_ruff[1],
            obedience: this.props.info.breed.obedience[1],
            stepin: this.props.info.breed.stepin[1],
            meshplus:this.props.info.breed.meshplus[1],           
            justCliked: false,
            imgsrc : '/arquivos/return-btn-2-en.png?v=636028946083630000'
        }
    }

    render(){
        return(
            <section className="size-info-en">
                <table className="sizes-pet" id="sizes-en">
                    <tbody>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="leash-info">
                                <span className="categorie-label">Leash</span>
                                <span className="suggested-size"> {this.state.leash}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                            <td className="pet-info-td" id="collar-info">
                                <span className="categorie-label">Collar</span>
                                <span className="suggested-size"> {this.state.collar}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                           
                        </tr>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="shockabsorbentleash-info">
                                <span className="categorie-label">Shock Absorbent Leash</span>
                                <span className="suggested-size"> {this.state.leash_ruff}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                            <td className="pet-info-td" id="obediencecollar-info">
                                <span className="categorie-label">Obedience Collar</span>
                                <span className="suggested-size"> {this.state.obedience}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                        </tr>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="harness-info">
                                <span className="categorie-label">Harness</span>
                                <span className="suggested-size"> {this.state.stepin}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                            <td className="pet-info-td" id="meshplus-info">
                                <span className="categorie-label">Mesh Plus Harness</span>
                                <span className="suggested-size"> {this.state.meshplus}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000" />  
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>
        )
    }
}

export default SizeInfoEn;
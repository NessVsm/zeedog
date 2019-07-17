import React, { Component } from 'react'

import './sizeinfopt.css'

class SizeInfoEn extends Component{
    constructor(props){
        super(props);

        this.state = {
            name_pt: this.props.info.breed.pt_name,
            leash:this.props.info.breed.leash[0],
            collar:this.props.info.breed.collar[0],
            leash_ruff: this.props.info.breed.leash_ruff[0],
            obedience: this.props.info.breed.obedience[0],
            stepin: this.props.info.breed.stepin[0],
            meshplus:this.props.info.breed.meshplus[0],           
            justCliked: false,
            imgsrc : '/arquivos/return-btn-2-en.png?v=636028946083630000'
        }
    }

    render(){
        return(
            <section className="size-info-pt">
                <table className="sizes-pet" id="sizes-pt">
                    <tbody>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="leash-info">
                                <span className="categorie-label">Guia</span>
                                <span className="suggested-size"> {this.state.leash}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1.png?v=636028945116730000" />  
                            </td>
                            <td className="pet-info-td" id="collar-info">
                                <span className="categorie-label">Coleira</span>
                                <span className="suggested-size"> {this.state.collar}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-2.png?v=636028945116730000" />  
                            </td>
                           
                        </tr>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="shockabsorbentleash-info">
                                <span className="categorie-label">Guia com Amortecedor</span>
                                <span className="suggested-size"> {this.state.leash_ruff}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1.png?v=636028945116730000" />  
                            </td>
                            <td className="pet-info-td" id="obediencecollar-info">
                                <span className="categorie-label">Coleira de Obediência</span>
                                <span className="suggested-size"> {this.state.obedience}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-2.png?v=636028945125130000" />  
                            </td>
                        </tr>
                        <tr className="sizes-pet-row">
                            <td className="pet-info-td" id="harness-info">
                                <span className="categorie-label">Peitoral</span>
                                <span className="suggested-size"> {this.state.stepin}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-1.png?v=636028945125130000" />  
                            </td>
                            <td className="pet-info-td" id="meshplus-info">
                                <span className="categorie-label">Peitoral Mesh-Plus</span>
                                <span className="suggested-size"> {this.state.meshplus}</span>
                                <img alt="Tamanho sugerido" src="https://www.zeedog.com.br/arquivos/td-bg-2.png?v=636028945125130000" />  
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>
        )
    }
}

export default SizeInfoEn;
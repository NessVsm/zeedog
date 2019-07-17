import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './apisearch.css';

let valores;
let vetor_racas;
let tamanho;
let nomes;
let vetor_aux = [] ;
class ApiSearch extends Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this)

        if(this.props.language ===  'EN'){
            this.state = {
                imgsrc : '/arquivos/dropdown-balloon-en.png?v=636029917040670000',
                alt_img : 'Select your dogs breed',
                breeds: [],
                breedsList: [],
                breedSelected: '',
                inputValue: '',
                justClicked: false,
                redirect: false,
                listOpen: false,
            };
        }
        else{
            this.state = {
                imgsrc : '/arquivos/dropdown-balloon.png?v=636028946614670000',
                alt_img : 'Selecione uma raça abaixo',
                breeds: [],
                breedsList: [],
                breedSelected: '',
                inputValue: '',
                justClicked: false,
                redirect: false,
                listOpen: false,
            };
        }
       
        
    }
    handleSelect = (value) => {
        this.setState({
            breedSelected: value,
            redirect: true
        })

        vetor_racas = Object.values(valores);
        nomes = Object.keys(valores);
        tamanho = nomes.length;

    }
    handleClick(){

        if(this.props.language === 'EN'){
            this.setState({
                justClicked: true,
                listOpen: true,
                alt_img: 'Select your dogs breed',
                imgsrc : '/arquivos/dropdown-balloon-en-pressed.png?v=636029917048430000',
                breedsList: this.state.breeds.map((option, key) => <li onClick={this.handleSelect.bind(this, option)} id={"en-result-option-"+option.fullName} value={option.fullName} key={key}> {option.en_name} </li>)
            })
            if(this.state.justClicked === true){
                this.setState({
                    justClicked: false,
                    listOpen: false,
                    imgsrc : '/arquivos/dropdown-balloon-en.png?v=636029917040670000',
                    breedsList: [],
    
                })
            }
        }
        else{
            this.setState({
                justClicked: true,
                listOpen: true,
                alt_img: 'Selecione uma raça abaixo',
                imgsrc : '/arquivos/dropdown-balloon-pressed.png?v=636029917058570000',
                breedsList: this.state.breeds.map((option, key) => <li onClick={this.handleSelect.bind(this, option)} id={"pt-result-option-"+option.pt_name} value={option.fullName} key={key}> {option.pt_name} </li>)
            })
            if(this.state.justClicked === true){
                this.setState({
                    justClicked: false,
                    listOpen: false,
                    breedsList: [],
                    alt_img: 'Selecione uma raça abaixo',
                    imgsrc : '/arquivos/dropdown-balloon.png?v=636028946614670000',
    
                })
            }
        }
      
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount(){

        fetch('https://cors-anywhere.herokuapp.com/https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json')
        .then(response => {
            return response.json();
        }).then(data => {
            valores = data;
            this.setState({breeds:Object.values(valores)})
        });
    }

    handleChange(val){
        this.setState({
            inputValue: val.target.value,
        })
        this.setState({tamanho_nome: this.state.breeds.length})
        vetor_aux = [];

        for(let i =0; i< this.state.tamanho_nome; i++){
            if((this.state.breeds[i].pt_name).includes( val.target.value)){
                vetor_aux.push(this.state.breeds[i].pt_name);

                this.setState({
                    breedsList: vetor_aux.map(( (vetor_aux,key) => <li id={"en-result-option-"+this.state.breeds[i].fullName} value={this.state.breeds[i].fullName} key={key} onClick={this.handleSelect.bind(this)} >{vetor_aux}</li>))
               })
        
            }
        }
       
        this.handleChange = this.handleChange.bind(this)

    }
    render(){
        if(this.state.redirect  && this.props.language === 'EN'){
            return(
                <Redirect to={{
                    pathname: '/ideal-size',
                    state:{
                        breed: this.state.breedSelected
                    }
                }}>
                </Redirect>
            )
        }
        else if (this.state.redirect  && this.props.language !== 'EN'){
            return(
                <Redirect to={{
                    pathname: '/tamanho-ideal',
                    state:{
                        breed: this.state.breedSelected
                    }
                }}>
                </Redirect>
            )
        }
        else{
            return(
                <div className="api-search">
                    <div className="select-button">
                        <img id="select-button-img" alt={this.state.alt_img} onClick={this.handleClick} src={"https://www.zeedog.com.br"+this.state.imgsrc} />
                    </div>
                    <div className="api-search-retrieval">
                        <ul className="select-breeds">       
                            <li style={this.state.listOpen ? { display: 'block'}: {display:'none'} }><input className="breed-selection-input" value={this.state.inputValue}  onChange={this.handleChange.bind(this)}></input></li>
                            {this.state.breedsList}
                        </ul>
                    </div>

                </div>
            )
        }
    }
}


export default ApiSearch;

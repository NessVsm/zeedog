import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Homepage from '../screens/Homepage/homepage';
import Racas from '../screens/PT/Racas/racas';
import Breeds from '../screens/EN/Breeds/breeds';
import IdealSize from '../screens/EN/IdealSize/idealsize';
import TamanhoIdeal from '../screens/PT/TamanhoIdeal/tamanhoideal';

class navigation extends Component{
    render(){
        return(
            <BrowserRouter basename="/zeedog">
                <Switch >
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/racas" component={Racas}/>
                    <Route path="/breeds" component={Breeds}/>
                    <Route path="/ideal-size" component={IdealSize}/>
                    <Route path="/tamanho-ideal" component={TamanhoIdeal}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

export default navigation;
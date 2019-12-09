import React, { useEffect } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StatusBar } from 'react-native';

import * as Pages from './src/pages/index.js';

function App(){

    useEffect(()=>{
        StatusBar.setHidden(true)
    },[StatusBar])

    return(
        <Router>
            <Scene key="root">
                <Scene initial key="Login" component={Pages.Login} title="Login" hideNavBar/>
            </Scene>
        </Router>
    );

}

export default App;
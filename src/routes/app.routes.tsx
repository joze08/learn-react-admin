import React from 'react';

import {Route, Switch} from 'react-router-dom'

import AddArtigo from 'pages/AppPages/AddArtigo';
import ReadArtigo from 'pages/AppPages/ReadArtigo';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/AppPages/AddArtigo" component={AddArtigo}/>
            <Route path="/AppPages/ReadArtigo" component={ReadArtigo}/>
        </Switch>
    );
}

export default AppRoutes;
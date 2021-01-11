import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './Welcome';
import Reset from './Reset';
import Update from './Update';
import UpdateIP from './UpdateIP';
import Certification from './Certification';

class Routes extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/reset' component={Reset} />
                <Route exact path='/update' component={Update} />
                <Route exact path='/certification' component={Certification} />
                <Route exact path='/updateIP' component={UpdateIP} />
            </Switch>
        </Router>
        );
  }
}
export default Routes;
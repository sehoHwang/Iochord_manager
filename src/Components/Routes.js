import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './Welcome';
import Forgot from './Forgot';
import Update from './Update';
import Certification from './Certification';

class Routes extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/forgot' component={Forgot} />
                <Route exact path='/update' component={Update} />
                <Route exact path='/certification' component={Certification} />
            </Switch>
        </Router>
        );
  }
}
export default Routes;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aladin from "../Screens/Aladin";
import LionKing from "../Screens/Lion_king";
import SpiderMan from "../Screens/Spider_man";
import Header from "./Header";
// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
class Routes extends React.Component{
    render(){
        return(
        <Router>
            <Header />
            <Route path="/aladin" component={Aladin} />
            <Route path="/lionking" component={LionKing} />
            <Route path="/spiderman" component={SpiderMan} />
        </Router>
        );
  }
}
export default Routes;
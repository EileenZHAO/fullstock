import React,{Component} from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';

import {config} from "../config/app.config.jsx";
import Auth from '../service/auth.service.jsx';



import Home from './home/home.component.jsx';
 import Navigation from './navigation/navigation.component.jsx';
 import Comment from './comment/comment.component.jsx';
 import My from './my/my.component.jsx';
 import Store from './store/store.component.jsx';




const auth = new Auth();

class Routing extends Component {

   
    render() {
        const captchaUrl = config.API_CAPTCHA;
        //console.log("Auth===", auth);


        return(
            <Router>
            <div>
                <Navigation/>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/my" component={My} />
                    <Route path="/store" component={Store} />
                 </main>
            </div>
          </Router>
        )
    }
}
export default Routing
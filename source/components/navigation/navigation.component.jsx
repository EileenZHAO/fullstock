import React,{Component} from 'react';

import {Link, NavLink} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <div className="Navigation">
                <div className="container">
                    <nav  className="navbar-fixed-bottom">
                            <ul className="nav">
                                <li><span className="glyphicon glyphicon-home"></span><NavLink to="/">首页</NavLink></li>
                                <li><span className="glyphicon glyphicon-shopping-cart"></span><NavLink to="/store">商城</NavLink></li>
                                <li><span className="glyphicon glyphicon-comment"></span><NavLink to="/comment">点评</NavLink></li>
                                <li><span className="glyphicon glyphicon-user"></span><NavLink to="/my">我的</NavLink></li>
                            </ul>

                    </nav>
                </div>
            </div>
        )
    }
    
}

export default Navigation
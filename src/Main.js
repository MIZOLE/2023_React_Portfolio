import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes,
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact"


class Main extends Component {
    render() {
        return (
            <HashRouter>
                    <div>
                        <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Projects</NavLink></li>
                            <li><NavLink to="/Contact">Contact details</NavLink></li>
                        </ul>

                        <div className="content">
                        <Routes>    
                            <Route exact to path="/" element={<Home/>}/>
                            <Route to path="/stuff" element={<Stuff/>}/>
                            <Route to path="/Contact" element={<Contact/>}/>
                        </Routes>
                        </div>
                    </div>


                    <footer>
                        <div id="media">
                        <a href="https://web.facebook.com/profile.php?id=100084252565503" class="fa fa-facebook"></a>
                        <a href="https://twitter.com/kom_lulama" class="fa fa-twitter"></a>
                        </div>
                    
                        <p>© 2023 - 2024 All rights reserved By Lulama Komana</p>
                    </footer>            
            </HashRouter>
        );
    }
}

export default Main;
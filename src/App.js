import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import HomeOne from './pages/HomeOne'
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/"  component={HomeOne}/>
                    <Route exact path={"/register"} component={Contact}/>
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;
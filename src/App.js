import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import Demo from './pages/Demo'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import Service from './pages/Service'
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/register"}`} component={Contact}/>
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import About from "./components/About";
import BlogItem from "./components/BlogItem";
import Blog from "./components/Blog";
import ProjectFeed from "./components/projects/ProjectFeed";

import Test from "./components/Test";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/projects" component={ProjectFeed} />
            <Route exact path="/post/:id" component={BlogItem} />
            <Route path="/test/:id" component={Test} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

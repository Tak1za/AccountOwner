import React, { Component } from "react";
import "./App.css";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../components/ErrorPages/NotFound/NotFound";
import OwnerList from "./Owner/OwnerList/OwnerList";
import AccountList from './Account/AccountList/AccountList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/owner-list" component={OwnerList} />
            <Route path="/account-list" component={AccountList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

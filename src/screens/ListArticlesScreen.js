import React, { Component } from "react";
import AppBar from "../components/AppBar";
import ListArticles from "../containers/ListArticles";

class ListArticlesScreen extends Component {
  render() {
    return (
      <div className="main">
        <AppBar />
        <ListArticles />
      </div>
    );
  }
}

export default ListArticlesScreen;

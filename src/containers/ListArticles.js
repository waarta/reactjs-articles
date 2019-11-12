import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllArticles } from "../actions/articles";

class ListArticles extends Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const { articles } = this.props.articles;
    return <div className="main"></div>;
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  getAllArticles: () => dispatch(getAllArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);

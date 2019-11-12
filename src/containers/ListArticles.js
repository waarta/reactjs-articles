import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllArticles } from "../actions/articles";
import ItemListArticles from "../components/ItemListArticle";

class ListArticles extends Component {
  componentDidMount() {
    const { articles } = this.props.articles;
    articles.length === 0 && this.props.getAllArticles();
  }

  render() {
    const { articles } = this.props.articles;
    return (
      <div className="main">
        {articles.map((article, index) => (
          <ItemListArticles key={index} {...{ article }} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  getAllArticles: () => dispatch(getAllArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);

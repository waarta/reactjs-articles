import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import T from "prop-types";
import { deleteArticle } from "../actions/articles";

/* override style Card */
const StyledCard = withStyles({
  root: {
    margin: "15px"
  }
})(Card);

class ItemListArticles extends Component {
  static propTypes = {
    article: T.object
  };

  static defaultProps = {
    article: {}
  };

  render() {
    // articles -> articles reducers
    // article -> current article
    const { articles, article, deleteArticle } = this.props;
    const { title, text, author } = article;

    return (
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">{author}</Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteArticle(articles.articles, article)}
            size="small"
          >
            Delete
          </Button>
        </CardActions>
      </StyledCard>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  deleteArticle: (allArticles, articleToRemove) =>
    dispatch(deleteArticle(allArticles, articleToRemove))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListArticles);

import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import T from "prop-types";

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
    const { title, text, author } = this.props.article;

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
      </StyledCard>
    );
  }
}

export default ItemListArticles;

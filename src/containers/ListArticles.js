import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllArticles } from "../actions/articles";
import ItemListArticles from "../components/ItemListArticle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core";
import ModalAddArticle from "../components/ModalAddArticle";

const AddButton = withStyles({
  root: {
    margin: "15px",
    float: "right"
  }
})(Fab);

class ListArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const { articles } = this.props.articles;
    articles.length === 0 && this.props.getAllArticles();
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { articles } = this.props.articles;
    const { isModalOpen } = this.state;

    return (
      <div className="main">
        {articles.map((article, index) => (
          <ItemListArticles key={index} {...{ article }} />
        ))}
        <AddButton color="primary" aria-label="add" onClick={this.openModal}>
          <AddIcon />
        </AddButton>
        {isModalOpen && (
          <ModalAddArticle isOpen={isModalOpen} handleClose={this.closeModal} />
        )}
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

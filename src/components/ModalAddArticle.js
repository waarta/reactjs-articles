import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import T from "prop-types";
import { addArticle } from "../actions/articles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

/* override style Modal */
const StyledPaper = withStyles({
  root: {
    margin: "auto",
    width: "70vw",
    padding: "10px"
  }
})(Paper);

class ModalAddArticle extends Component {
  static propTypes = {
    isOpen: T.bool.isRequired,
    handleClose: T.func.isRequired
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    // refInput for title
    this.getTitle = element => {
      this.title = element;
    };
    // refInput for text
    this.getText = element => {
      this.text = element;
    };
    // refInput for autor
    this.getAuthor = element => {
      this.author = element;
    };
  }
  submit() {
    const { addArticle, handleClose } = this.props;

    if (this.text.value) {
      // reset all fields
      addArticle({
        title: this.title.value,
        text: this.text.value,
        author: this.author.value
      });
      this.title.value = "";
      this.text.value = "";
      this.author.value = "";
      // close modal after submit
      handleClose();
    }
  }

  render() {
    const { isOpen, handleClose } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={isOpen}
          onClose={handleClose}
        >
          <StyledPaper>
            <h2 id="modal-title" style={{ textAlign: "center" }}>
              Add an article
            </h2>
            <div id="modal-description">
              <TextField
                id="title"
                label="Title"
                margin="normal"
                fullWidth
                inputRef={this.getTitle}
              />
              <TextField
                id="text"
                label="Article"
                multiline
                rows="5"
                margin="normal"
                variant="outlined"
                fullWidth
                inputRef={this.getText}
              />
              <TextField
                id="author"
                label="Author"
                margin="normal"
                fullWidth
                inputRef={this.getAuthor}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.submit}
                size="medium"
              >
                Submit
              </Button>
            </div>
          </StyledPaper>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddArticle);

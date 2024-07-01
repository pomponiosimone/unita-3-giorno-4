import React, { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(`https://api.example.com/books/${this.props.asin}/comments`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        console.error('Failed to fetch comments');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  addComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment bookId={this.props.asin} onCommentAdded={this.addComment} />
      </div>
    );
  }
}

export default CommentArea;
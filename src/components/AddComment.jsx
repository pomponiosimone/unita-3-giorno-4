import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
  state = {
    text: '',
    rating: 1,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      text: this.state.text,
      rating: this.state.rating,
    };

    try {
      const response = await fetch(`https://api.example.com/books/${this.props.bookId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      if (response.ok) {
        const addedComment = await response.json();
        this.props.onCommentAdded(addedComment);
        this.setState({ text: '', rating: 1 });
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="commentText">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="commentRating">
          <Form.Label>Vota</Form.Label>
          <Form.Control
            as="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
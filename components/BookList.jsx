import React, { Component } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { Col, Form, Row, Alert } from 'react-bootstrap';

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Row className="mt-5">
        <Col xs={12} md={8}>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook 
                    book={b} 
                    selected={this.state.selectedAsin === b.asin}
                    onBookSelect={this.handleBookSelect} 
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          {this.state.selectedAsin ? (
            <CommentArea asin={this.state.selectedAsin} />
          ) : (
            <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
          )}
        </Col>
      </Row>
    );
  }
}

export default BookList;
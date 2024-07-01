import React from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends React.Component {
  handleClick = () => {
    this.props.onBookSelect(this.props.book.asin);
  };

  render() {
    return (
      <Card
        onClick={this.handleClick}
        style={{ border: this.props.selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

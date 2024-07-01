import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <p>Vota {comment.rating}</p>
    </div>
  );
};

export default SingleComment;
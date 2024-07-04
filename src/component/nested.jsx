import React, { useState } from 'react';
import './NestedComment.css'; // Assuming you'll style it separately

const NestedComment = ({ comment, addReply }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState('');

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleAddReply = () => {
    if (replyText.trim() !== '') {
      addReply(comment.id, {
        id: Date.now(),
        author: 'User', // Replace with actual user data or use a login system
        text: replyText,
      });
      setReplyText('');
    }
  };

  return (
    <div className="nested-comment">
      <div className="comment">
        <div className="comment-content">
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
        </div>
        {comment.replies && (
          <button className="toggle-replies" onClick={toggleReplies}>
            {showReplies ? 'Hide Replies' : 'Show Replies'}
          </button>
        )}
      </div>
      {showReplies && comment.replies && (
        <div className="replies">
          {comment.replies.map(reply => (
            <NestedComment key={reply.id} comment={reply} addReply={addReply} />
          ))}
        </div>
      )}
      <div className="add-reply">
        <input
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button onClick={handleAddReply}>Reply</button>
      </div>
    </div>
  );
};

export default NestedComment;

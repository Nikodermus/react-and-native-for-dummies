import React from 'react';

const Comment = ({ text, user, removeComment, postId, i }) => {
    return (
        <div className="comment">
            <p>
                <strong>{user}</strong>
                {text}
                <div
                    className="remove-comment"
                    onClick={() => removeComment(postId, i)}
                >
                    &times;
                </div>
            </p>
        </div>
    );
};

export default Comment;

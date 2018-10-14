import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.submitComment = this.submitComment.bind(this);
    }

    submitComment(e) {
        e.preventDefault();
        const { postId } = this.props;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(author, comment);

        this.props.addComment(postId, author, comment);
        this.props.comment_form.reset();
    }

    render() {
        const { post_comments } = this.props;
        return (
            <div className="comments">
                {post_comments.map((comment, i) => (
                    <Comment {...comment} key={i} {...this.props} i={i} />
                ))}
                <form
                    onSubmit={this.submitComment}
                    action=""
                    className="comment-form"
                    ref="comment_form"
                >
                    <input type="text" placeholder="author" ref="author" />
                    <input type="text" placeholder="comment" ref="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;

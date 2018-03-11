import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => {
          return <Photo
            key={i}
            post={post}
            i={i}
            {...this.props}
          />
        })}
      </div>
    )
  }
};

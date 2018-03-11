export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(post_id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    post_id,
    author,
    comment
  }
}

export function removeComment(post_id, index) {
  return {
    type: 'REMOVE_COMMENT',
    post_id,
    index
  }
}
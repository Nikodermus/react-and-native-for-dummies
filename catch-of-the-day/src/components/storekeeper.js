import React from 'react';


class StorePicker extends React.Component {
  render() {
    return (
      <form action="">
        <h2>Select your store!</h2>
        <input type="text" placeholder="Store name" />
        <input type="submit" value="Search" required />
      </form>
    )
  }
}

export default StorePicker;
import React from 'react';
import AddFishForm from './addfishform';


class Inventory extends React.Component {
  render() {
    return (

      <div>
        <h2>Inventory</h2>
        <AddFishForm></AddFishForm>
      </div>
    )
  }
}

export default Inventory;
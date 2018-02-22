import React from 'react';
import AddFishForm from './addfishform';


class Inventory extends React.Component {


  render() {
    return (

      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSamples}>Load Sample</button>
      </div>
    )
  }
}

export default Inventory;
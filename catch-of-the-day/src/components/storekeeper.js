import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  store_input;

  goToStore(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/store/${this.store_input.value}`)
    console.log(this)
  }

  render() {
    return (
      <form action="" onSubmit={this.goToStore}>
        <h2>Select your store!</h2>
        <input type="text" placeholder="Store name" defaultValue={getFunName()} ref={(input) => { this.store_input = input }} />
        <input type="submit" value="Search" required />
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}


export default StorePicker;
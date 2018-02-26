import React from 'react';
import AddFishForm from './addfishform';
import base from '../base';


class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.authenticate = this.authenticate.bind(this);

    this.state = {
      // Set the same user id and owner until I can resolve the authentica api problem
      uid: 1,
      owner: 1
    }
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const update_fish = {
      ...fish,
      [e.target.name]: e.target.value,
    };
    this.props.updateFish(key, update_fish);
  }

  authenticate(provider) {
    // base.AuthWithOAuthPopup(provider, this.authHandler)
  }

  authHandler(err, auth_data) {

  }

  logOut() {

  }
  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          ref={(input) => this.name = input}
          type="text"
          placeholder="Fish Name"
          name="name"
          value={fish.name}
          onChange={(e) => this.handleChange(e, key)} />
        <input
          ref={(input) => this.price = input}
          type="text"
          placeholder="Fish Price"
          name="price"
          value={fish.price}
          onChange={(e) => this.handleChange(e, key)} />
        <select
          ref={(input) => this.status = input}
          id=""
          name="status"
          value={fish.status}
          onChange={(e) => this.handleChange(e, key)}>
          <option value="Available">Fresh</option>
          <option value="Unvailable">Sold out!</option>
        </select>
        <textarea
          ref={(input) => this.desc = input}
          placeholder="Fish Desc"
          name="desc"
          value={fish.desc}
          onChange={(e) => this.handleChange(e, key)} />
        <input
          ref={(input) => this.image = input}
          type="text"
          placeholder="Fish Image"
          name="image"
          value={fish.image}
          onChange={(e) => this.handleChange(e, key)} />
        <button onClick={() => this.props.removeFish(key)}>Remove fish</button>
      </div>
    )
  }

  renderLogin() {

    return (<nav className="login">
      <h2>Inventory</h2>
      <p>Sign in to manage</p>
      <button className="github" onClick={() => this.authenticate('github')}>Login with github</button>
      <button className="facebook" onClick={() => this.authenticate('facebook')}>Login with facebook</button>
      <button className="twitter" onClick={() => this.authenticate('twitter')}>Login with twitter</button>
    </nav>)
  }

  render() {
    const logout_btn = <button onClick={() => this.logOut()}></button>;

    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, not your store!</p>
          {logout_btn}
        </div>
      )
    }

    return (
      <div>
        <h2>Inventory</h2>
        {logout_btn}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSamples}>Load Sample</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  updateFish: React.PropTypes.func.isRequired,
}

export default Inventory;
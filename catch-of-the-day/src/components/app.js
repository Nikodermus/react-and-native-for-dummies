import React from 'react';

import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish';

import sample_fishes from '../sample-fishes';

import base from '../base';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteToOrder = this.deleteToOrder.bind(this);
    this.removeFish = this.removeFish.bind(this);

    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const local_storage_ref = localStorage.getItem(`order-${this.props.params.storeId}`);

    if (local_storage_ref) {
      this.setState({
        order: JSON.parse(local_storage_ref)
      });
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(mext_prop, next_state) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(next_state.order))

  }

  loadSamples() {
    this.setState({
      fishes: sample_fishes
    })
  }

  addToOrder(key) {

    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;

    this.setState({ order })
  }

  deleteToOrder(key) {
    const order = { ...this.state.order };
    order[key] = null;
    delete order[key];
    this.setState({ order });
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    const current_time = Date.now().toString();
    fishes[`fish-${current_time}`] = fish;

    this.setState({ fishes })
  }

  updateFish(key, update_fish) {
    const fishes = { ...this.state.fishes };
    fishes[key] = update_fish;
    this.setState({ fishes });
  }

  removeFish(key) {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="A fresh way to start React" content="Dermus' Market" />
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => {
                return (
                  <Fish
                    addToOrder={this.addToOrder}
                    index={key}
                    key={key}
                    data={this.state.fishes[key]} />
                )
              }
              )
            }
          </ul>
        </div>
        <Order
          deleteToOrder={this.deleteToOrder}
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params} />
        <Inventory
          addFish={this.addFish}
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          store_id={this.props.match.params.store_id} />
      </div>
    )
  }
}

App.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default App;
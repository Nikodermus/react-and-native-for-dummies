import React from 'react';

import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish';

import sample_fishes from '../sample-fishes'

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addFish = this.addFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    this.state = {
      fishes: {},
      order: {}
    };

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

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    const current_time = Date.now().toString();
    fishes[`fish-${current_time}`] = fish;

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
              .map(key => <Fish addToOrder={this.addToOrder} index={key} key={key} data={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
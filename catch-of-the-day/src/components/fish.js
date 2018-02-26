import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {

    const { data, index } = this.props;
    const available = data.status === 'available'

    return (
      <li className="menu-fish">
        <img src={data.image} alt={data.name} />
        <h3 className="fish-name">
          {data.name}
          <span className="price">
            {formatPrice(data.price)}
          </span>
        </h3>
        <p>{data.desc}</p>
        <button
          disabled={!available}
          onClick={() => this.props.addToOrder(index)}>
          {available ? 'Add to order' : 'Sold out'}
        </button>

      </li>
    )
  }
};

Fish.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired,
}

export default Fish;

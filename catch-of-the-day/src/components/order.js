import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} no longer available</li>
    }

    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    const order_ids = Object.keys(this.props.order),
      total = order_ids.reduce((tot, val) => {
        const fish = this.props.fishes[val];
        const count = this.props.order[val];
        const is_available = fish && fish.status === 'available';
        if (is_available) {
          return tot + (count * fish.price || 0)
        }
        return tot
      }, 0)

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {order_ids.map(this.renderOrder)}
          <li className="total">
            <strong>
              {formatPrice(total)}
            </strong>
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;
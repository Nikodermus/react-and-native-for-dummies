import React from 'react';
import { formatPrice } from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const remove_button = <button onClick={() => this.props.deleteToOrder(key)}>&times;</button>

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} no longer available {remove_button}</li>
    }

    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          lbs {fish.name} {remove_button}
        </span>
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
        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {order_ids.map(this.renderOrder)}
          <li className="total">
            <strong>
              {formatPrice(total)}
            </strong>
          </li>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Order;
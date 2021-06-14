import React, { useState } from "react";
import PropTypes from "prop-types";

const RestaurantButton = props => (
  <button onClick={props.orderOne} className="btn btn-primary">
    Add
  </button>
);

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    return setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  };
};

function refundOrder(orders, deliveryOrders) {

};

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}

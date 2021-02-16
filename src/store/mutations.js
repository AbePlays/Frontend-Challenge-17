export default {
  incrementBackers(state) {
    state.totalBackers += 1;
  },
  changeProducts(state, payload) {
    if (payload.id > 0) {
      state.products[payload.id - 1].quantity -= 1;
      state.moneyRaised += parseInt(payload.amount);
    }
  },
};

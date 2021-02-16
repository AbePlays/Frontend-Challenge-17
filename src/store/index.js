import { createStore } from "vuex";

import getters from "./getters";
import mutations from "./mutations";

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Bamboo Stand",
          quantity: 101,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          amount: 25,
        },
        {
          id: 2,
          name: "Black Edition Stand",
          quantity: 64,
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amount: 75,
        },
        {
          id: 3,
          name: "Mahogany Special Edition",
          quantity: 0,
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amount: 200,
        },
      ],
      goal: 1000,
      moneyRaised: 0,
      totalBackers: 0,
    };
  },
  getters,
  mutations,
});

export default store;

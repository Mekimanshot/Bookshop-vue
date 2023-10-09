import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
  
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    
   
  },
  actions: {
    
    addToCart({ commit }, product) {
      commit('addToCart', product);
    
    },
    incrementQuantity({ commit }, product) {
      commit('incrementQuantity', product);
  
    },
    decrementCartItemQuantity({ commit, state }, index) {
      commit('decrementQuantity', index);
    
    },
   
  },
  modules: {
  }
  
})

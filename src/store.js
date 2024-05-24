import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: 'Minimal Look Bedrooms',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', 
    text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
  },
  getters: {
    getTitle: (state) => {
        return state.title;
    },
    getText1: (state) => {
        return state.text1;
    },
    getText2: (state) => {
        return state.text2;
    }
  }
});

export default store;
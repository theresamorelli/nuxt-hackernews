import Vue from 'vue';
import Vuex from 'vuex';
import { fetchIds, fetchItems, fetchItem } from '@/api/api';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: () => ({
      topIds: [],
      topItems: [],
      bestIds: [],
      bestItems: [],
    }),

    mutations: {
      SET_TOP_IDS(state, ids) {
        state.topIds = ids;
      },
      SET_TOP_ITEMS(state, items) {
        state.topItems = items;
      },
      SET_BEST_IDS(state, ids) {
        state.bestIds = ids;
      },
      SET_BEST_ITEMS(state, items) {
        state.bestItems = items;
      },
    },

    actions: {
      async getTopIds() {
        const ids = await fetchIds('top');
        return ids;
      },
      async getBestIds() {
        const ids = await fetchIds('best');
        return ids;
      },
      async getTwentyItems({ commit }, whichIds) {
        console.log('whichIds', whichIds);
        const items = await fetchItems(this.state[whichIds].slice(0, 20));
        return items.map((item) => item.data);
      },
    },
  });

export default store;

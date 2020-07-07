import Vue from 'vue';
import Vuex from 'vuex';
import { fetchIds, fetchItems, fetchItem } from '@/api/api';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: () => ({
      topItems: [],
      topIds: [],
      count: 0,
    }),
    mutations: {
      SET_TOP_IDS(state, ids) {
        state.topIds = ids;
      },
      SET_TOP_ITEMS(state, items) {
        state.topItems = items;
      },
    },
    actions: {
      async getTopIds() {
        const ids = await fetchIds('top');
        return ids;
      },
      async getTwentyItems({ commit }) {
        const items = await fetchItems(this.state.topIds.slice(0, 20));
        commit(
          'SET_TOP_ITEMS',
          items.map((item) => item.data)
        );
      },
    },
  });

export default store;

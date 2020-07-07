import Vue from 'vue';
import Vuex from 'vuex';
import { fetchIds } from '@/api/api';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: () => ({
      items: [],
      ids: [],
      count: 0,
    }),
    mutations: {
      SET_IDS(state, ids) {
        state.ids = ids;
      },
    },
    actions: {
      async getIds() {
        const ids = await fetchIds();
        return ids;
      },
    },
  });

export default store;

import Vue from 'vue';
import Vuex from 'vuex';
import { fetchIds } from '@/api/api';

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
    },
    actions: {
      async getTopIds() {
        const ids = await fetchIds('top');
        return ids;
      },
    },
  });

export default store;

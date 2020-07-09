import Vue from 'vue';
import Vuex from 'vuex';
import { fetchIds, fetchItems } from '@/api/api';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: () => ({
      topIds: [],
      topItems: [],
      bestIds: [],
      bestItems: [],
      isLoading: false,
    }),

    mutations: {
      SET_TOP_IDS(state, ids) {
        state.topIds = ids;
      },
      ADD_TOP_ITEMS(state, items) {
        state.topItems = [...state.topItems, ...items];
      },
      SET_BEST_IDS(state, ids) {
        state.bestIds = ids;
      },
      ADD_BEST_ITEMS(state, items) {
        state.bestItems = [...state.bestItems, ...items];
      },
      START_LOADING(state) {
        state.isLoading = true;
      },
      STOP_LOADING(state) {
        state.isLoading = false;
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
      async getNextItems({ commit }, items) {
        const res = await fetchItems(items);
        return res.map((item) => item.data);
      },
    },
  });

export default store;

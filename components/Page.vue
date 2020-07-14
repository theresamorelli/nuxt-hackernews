<template>
  <div :class="wrapperClass">
    <div v-if="error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" :current-page="current" />
    <Loading v-if="isLoadingMore" :is-fullpage="false" />
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    current: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    error: Boolean,
  },

  computed: {
    wrapperClass() {
      return this.current + '-wrapper';
    },
    isLoadingMore() {
      return this.current === 'top'
        ? this.$store.state.isLoading && this.$store.state.topItems.length
        : this.$store.state.isLoading && this.$store.state.bestItems.length;
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = async () => {
        const store = this.$store;
        let ids;
        let items;
        if (this.current === 'top') {
          ids = store.getters.topIds;
          items = store.getters.topItems;
        } else {
          ids = store.getters.bestIds;
          items = store.getters.bestItems;
        }

        const isAtBottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (isAtBottomOfWindow) {
          store.commit('START_LOADING');

          const itemsToFetch = ids.slice(items.length, items.length + 20);
          const nextItems = await store.dispatch('getNextItems', itemsToFetch);
          store.commit(`ADD_${this.current.toUpperCase()}_ITEMS`, nextItems);

          store.commit('STOP_LOADING');
        }
      };
    },
  },
};
</script>

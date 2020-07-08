<template>
  <div class="top-wrapper">
    <div v-if="$fetchState.pending" class="loading vh-center">Fetching...</div>
    <div v-else-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper :items="items" />
  </div>
</template>

<script>
export default {
  async fetch() {
    // get top ids and set in store
    const res = await this.$store.dispatch('getTopIds');
    await this.$store.commit('SET_TOP_IDS', res);

    // call for first twenty items by id and add to store
    const itemsToGet = this.$store.state.topIds.slice(
      this.$store.state.topItems.length,
      this.$store.state.topItems.length + 20
    );
    const items = await this.$store.dispatch('getNextItems', itemsToGet);
    this.$store.commit('ADD_TOP_ITEMS', items);
  },

  computed: {
    items() {
      return this.$store.state.topItems;
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = async () => {
        const isAtBottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (isAtBottomOfWindow) {
          const itemsToGet = this.$store.state.topIds.slice(
            this.$store.state.topItems.length,
            this.$store.state.topItems.length + 20
          );
          const items = await this.$store.dispatch('getNextItems', itemsToGet);
          this.$store.commit('ADD_TOP_ITEMS', items);
        }
      };
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>

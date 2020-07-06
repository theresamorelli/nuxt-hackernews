<template>
  <header>
    <div class="logo">hacker news</div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/today" :class="{ active: currentRoute === 'today' }"
            >Today</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/best" :class="{ active: currentRoute === 'best' }"
            >Best</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/newest" :class="{ active: currentRoute === 'newest' }"
            >Newest</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.3rem;
}

.logo {
  position: absolute;
  left: 7%;
  top: 23px;
  color: var(--orange-hn);
  font-size: 1.4rem;
  font-family: var(--accent-font);
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 20px;
}

a {
  color: var(--yellow);
  transition: all 0.5s ease;
}

a:hover,
a.active {
  color: white;
  text-decoration: underline;
}

a.active {
  cursor: default;
}
</style>

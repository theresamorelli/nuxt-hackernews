<template>
  <header>
    <div class="logo">hacker news</div>
    <nav>
      <ul>
        <li><nuxt-link to="/today" class="active">Today</nuxt-link></li>
        <li><nuxt-link to="/best">Best</nuxt-link></li>
        <li><nuxt-link to="/newest">Newest</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

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

<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link">Homepage</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
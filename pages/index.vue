<template>
  <section class="container background">
    <div>
      <h1 class="title">
        linuskinzel
      </h1>
    </div>
    <div>
      <aboutBox />
    </div>
    <div class="links">
     
    </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import AboutBox from '~/components/AboutBox.vue'

export default {
  components: {
    Logo,
    AboutBox
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.background {
  background: url(~/assets/images/background.jpg);
  background-size: cover;
  background-position: center
}

@media screen and (max-width: 374px) {
  .title {
    font-size: 50px
  }  
}
</style>

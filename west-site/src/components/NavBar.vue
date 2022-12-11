<template>
  <div>
    <head>
      <title>Navigation bar</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body class="mt-20">
      <header>
        <img src="@/assets/westpurple.png" class="max-h-12 ml-8" />
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/our-mission">Our Mission</router-link></li>
            <li><router-link to="/involvement">Get Involved</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/sponsors">Sponsors</router-link></li>
          </ul>
        </nav>
      </header>
    </body>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
header {
  background-color: #d6e3ff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
  z-index: 1000;
}
header * {
  display: inline;
}
header li {
  margin: 20px;
}
</style>

<template>
  <div>
    <div id="page-header">
      <img
        src="@/assets/stars.jpg"
        id="space-cool"
        class="max-h-96 max-w-72 h-1/2"
      />
      <h1 class="text-5xl font-medium tracking-widest">Contact Us</h1>
      <h2 class="text-xl fonts-semibold">Have a question? Reach out!</h2>
    </div>
    <div id="email-group">
      <p class="text-left ml-12 mt-12">Email Us!</p>
      <input
        id="email-text"
        readonly
        class="w-72"
        value="westernengineeringsatellite@gmail.com"
      />
      <button class="btn" v-on:click="copyEmail()">
        Copy email <font-awesome-icon icon="far fa-copy" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyEmail() {
      let text = document.getElementById("email-text").innerHTML;
      try {
        navigator.clipboard.writeText(text);
        console.log("Content copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },
  },
};
</script>

<style scoped>
#page-header {
  position: relative;
}
h1 {
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align */
}
h2 {
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 125%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align */
  text-align: left;
}
#email-text[readonly] {
  border-style: dotted;
  cursor: not-allowed;
  color: purple;
}
</style>

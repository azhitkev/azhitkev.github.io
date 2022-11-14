<template>
  <div>
    <div id="page-header">
      <img
        src="@/assets/stars.jpeg"
        id="space-cool"
        class="max-h-96 max-w-72 h-1/2"
      />
      <h1 class="text-5xl font-medium tracking-widest">Contact Us</h1>
      <h2 class="text-xl fonts-semibold">Have a question? Reach out!</h2>
    </div>
    <div id="email-group" class="text-left ml-12">
      <p class="text-left mt-12 font-semibold text-xl">Email Us!</p>
      <input
        id="email-text"
        readonly
        class="w-80 text-center rounded border-2 border-purple-700 mt-2"
        value="westernengineeringsatellite@gmail.com"
      />
      <button class="btn" v-on:click="copyEmail()">
        <font-awesome-icon icon="fa-regular fa-copy" class="ml-2 fa-lg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyEmail() {
      let text = document.getElementById("email-text").value;
      console.log(text);
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
  cursor: not-allowed;
}
</style>

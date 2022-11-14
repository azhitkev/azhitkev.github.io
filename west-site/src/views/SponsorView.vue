<template>
  <div>
    <div id="page-header">
      <img
        src="@/assets/stars.jpeg"
        id="space-cool"
        class="max-h-96 max-w-72 h-1/2"
      />
      <h1 class="text-5xl font-medium tracking-widest">
        Thank You To Our Sponsors!
      </h1>
      <h2 class="text-xl fonts-semibold">
        Without our sponsors, we would not be able to complete our projects!
      </h2>
    </div>
  </div>
</template>
<style scoped>
#page-header {
  position: relative;
}
h1 {
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
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
</style>

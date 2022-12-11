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
    <div id="sponsors-list" class="ml-20 flex flex-col">
      <p class="text-left my-12 font-semibold text-xl">Our Sponsors</p>
      <div class="flex flex-row max-h-12 max-w-12">
        <img src="@/assets/uwoeng.png" class="max-h-12 max-w-12" />
        <img src="@/assets/jmp.jpeg" class="max-h-12 max-w-12" />
        <img src="@/assets/emworks.png" class="max-h-12 max-w-12" />
        <img src="@/assets/altium.jpeg" class="max-h-12 max-w-12" />
      </div>
      <p class="text-left mt-12 mb-4 font-semibold text-xl">
        Interested in becoming a sponsor?
      </p>
      <p class="text-left font-medium text-lg">
        Please take a look at our official sponsorship package and consider
        filling out the form below!
      </p>
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

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
    <div class="ml-20">
      <div id="email-group" class="text-left">
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
      <div id="social-media-group" class="text-left">
        <p class="text-left mt-12 font-semibold text-xl">Ways to keep up:</p>
        <button class="btn" v-on:click="openFacebook">
          <font-awesome-icon
            icon="fa-brands fa-square-facebook"
            class="fa-2xl"
          />
        </button>
        <button class="btn ml-2" v-on:click="openInstagram">
          <font-awesome-icon icon="fa-brands fa-instagram" class="fa-2xl" />
        </button>
        <button class="btn ml-2" v-on:click="openTwitter">
          <font-awesome-icon icon="fa-brands fa-twitter" class="fa-2xl" />
        </button>
        <button class="btn ml-2" v-on:click="openLinkedIn">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2xl" />
        </button>
      </div>
      <div id="location-group">
        <p>Spencer Engineering Building</p>
        <p>The University of Western Ontario</p>
        <p>London, Ontarion, Canada, N6A 5B9</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.704583781092!2d-81.27822538412649!3d43.005554702083835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee22db5c7859%3A0xab828a2380a80605!2sSpencer%20Engineering%20Building!5e0!3m2!1sen!2sca!4v1670719694766!5m2!1sen!2sca"
          width="700"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="my-8 mx-auto"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      center: { lat: 43.0055547, lng: -81.2782254 },
      markers: [
        {
          position: {
            lat: 43.0055547,
            lng: -81.2782254,
          },
        },
      ],
    };
  },
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
    openFacebook() {
      window.open("https://www.facebook.com/westernengineeringsatellite");
    },
    openInstagram() {
      window.open("https://www.instagram.com/westernengineeringsatellite/");
    },
    openTwitter() {
      window.open("https://twitter.com/westernengsat");
    },
    openLinkedIn() {
      window.open(
        "https://www.linkedin.com/company/western-engineering-satellite-team/"
      );
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
#email-text[readonly] {
  cursor: not-allowed;
}
.btn {
  margin-top: 8px;
}
</style>

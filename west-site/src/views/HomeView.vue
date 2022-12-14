<template>
  <div>
    <div class="zoom">
      <img src="@/assets/earth-view.jpg" class="mt-20" />
      <div class="centered">Western Engineering Satellite Team</div>
    </div>
    <main role="main" class="text-white">
      <section id="section-1" class="flex my-20 mx-40">
        <h1 class="text-left font-medium w-2/4 pr-8">Our Mission.</h1>
        <div class="font-semibold flex-col text-left">
          <p class="text-lg">
            The Western Engineering Satellite Team was created by a group of
            undergraduate students from Western University passionate about
            learning and designing aerospace and satellite projects.
          </p>
          <br />
          <p class="text-lg">
            WEST strives to create more opportunities for students to gain
            experience designing and creating small satellites before heading
            out into the workplace. WEST aims to provide the STEM community with
            insight into various different areas of STEM that would otherwise be
            difficult to test.
          </p>
          <router-link to="/our-mission" custom v-slot="{ navigate }">
            <button
              class="button-30 mt-8 font-semibold"
              role="button"
              @click="navigate"
            >
              Learn more
            </button>
          </router-link>
        </div>
      </section>
      <section id="section-2">
        <h1 class="text-left font-medium w-2/4 px-40 py-20">
          Satellite Subteams
        </h1>
        <div>
          <h1>Electronic Power System</h1>
          <h1>Payload</h1>
          <h1>ADCS</h1>
          <h1>Structures</h1>
          <h1>Command & Data Handling</h1>
          <h1>Communications</h1>
        </div>
      </section>
      <footer class="my-4">
        <p>Western University Associated</p>
      </footer>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import $ from "jquery";
// Components

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".zoom img").css({
    width: 100 + scroll / 5 + "%",
    top: -(scroll / 10) + "%",
  });
});

export default defineComponent({
  name: "HomeView",
  components: {},
  methods: () => ({
    handleScroll: () => {},
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
      }
    },
    eraseText() {},
  }),
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Western", "Engineering", "Satellite", "Team"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
});
</script>

<style scoped>
body {
  font-family: Georgia, serif;
  color: #333;
  font-size: 1.4rem;
  line-height: 2rem;
}
a {
  color: #000;
}
h1 {
  font-size: 2.6rem;
  line-height: 2.6rem;
}
.content {
  margin: 0 auto;
  max-width: 100%;
}
main {
  padding: 1% 0;
  position: relative;
  background: black;
  box-shadow: 0px -10px 60px rgba(0, 0, 0, 0.25);
  height: 100%;
}
footer p {
  font-size: 0.8rem;
  font-weight: bold;
  color: #ccc;
}
footer a {
  color: #ccc;
}
/* --- Important Pen Styles --- */

.zoom {
  overflow: hidden;
  padding-bottom: 55%;
}
.zoom img {
  position: fixed;
  top: 0%;
  left: 50%;
  max-width: 150%;
  width: 100%;
  transform: translateX(-50%);
}
@media (max-width: 667px) {
  h1 {
    font-size: 1.8rem;
    line-height: 2.6rem;
    text-align: left;
  }
  .content {
    margin: 0 auto;
    max-width: 90%;
    width: 100%;
    height: 100%;
    text-align: justify;
  }
  .zoom {
    overflow: hidden;
    padding-bottom: 75%;
    position: relative;
  }
  .typed-text {
    color: purple;
  }
  .cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }

  cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink {
    49% {
      background-color: black;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3.25em;
  font-weight: 700;
  color: #d6e3ff;
  text-shadow: 1px 1px 1px #400080, 1px 2px 1px #400080, 1px 3px 1px #400080,
    1px 7px 1px #400080, 1px 8px 1px #400080, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}

#section-2 {
  background: linear-gradient(120deg, #7950f2, #270099);
  height: 50vh;
  width: 100%;
}
html {
  background-color: black;
}

.button-30 {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 16px;
}

.button-30:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>

<template>
  <div>
    <div class="zoom">
      <img src="@/assets/earth-view.jpg" class="mt-20" />
    </div>
    <main role="main">
      <div class="content">
        <h2>
          Welcome to the
          <span class="typed-text"> {{ typeValue }} </span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h2>
        <a
          href="http://webdesignerwall.com/tutorials/how-to-add-icon-fonts-to-any-element-with-css"
          alt="webdesignerwall.com"
          target="_blank"
          >View Tutorial</a
        >
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Nulla vitae elit libero, a
          pharetra augue. Integer posuere erat a ante venenatis dapibus posuere
          velit aliquet.
        </p>
        <p>
          Curabitur blandit tempus porttitor. Integer posuere erat a ante
          venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>
        <footer>
          <p>
            A
            <a
              href="http://www.webdeisgnerwall.com"
              alt="web designer wall"
              target="_blank"
              >webdesignerwall.com</a
            >
            Tutorial
          </p>
        </footer>
      </div>
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
.content {
  margin: 0 auto;
  max-width: 90%;
  width: 720px;
}
main {
  padding: 1% 0;
  position: relative;
  background: #f5f5f5;
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
}
</style>

<template>
  <div>
    <div class="zoom">
      <img src="@/assets/earth-view.jpg" class="mt-20" />
    </div>
    <main role="main">
      <div class="content">
        <h1>Zoom Hero Image on Scroll</h1>
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
  }),
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

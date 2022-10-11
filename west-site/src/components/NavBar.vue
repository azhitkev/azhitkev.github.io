<template>
  <div>
    <head>
      <title>Navigation bar DEMO</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body class="mt-20">
      <header class="justify-end">
        <img src="@/assets/westpurple.png" class="max-h-12 ml-8" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">WEST News</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
          libero eget magna commodo, quis pharetra tellus pretium. Sed viverra
          ante in mauris finibus dapibus. Maecenas congue dapibus nulla, eu
          gravida orci consequat eu. Phasellus nec nunc malesuada, aliquam massa
          ac, accumsan metus. Fusce sed dignissim lectus. Nunc elit tellus,
          sollicitudin ac accumsan ut, egestas et dui. Maecenas aliquam est a
          ligula scelerisque, in aliquam neque sodales. Nullam condimentum
          euismod dictum. Curabitur non ex elementum, pretium enim ut, ornare
          ipsum.
        </p>
      </main>
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
}
header * {
  display: inline;
}
header li {
  margin: 20px;
}
</style>

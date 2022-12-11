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
      <p class="text-left font-medium text-lg mb-8">
        Please take a look at our official sponsorship package and consider
        filling out the form below!
      </p>
      <div>
        <form
          id="form"
          action="https://formsubmit.co/westernengineeringsatellite@gmail.com"
          method="POST"
        >
          <div class="input_group">
            <label for="">name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div class="input_group">
            <label for="">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </div>

          <div class="input_group">
            <label for="content">Message</label>
            <textarea
              name="content"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <div class="input_group">
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </div>
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
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
  position: relative;
}
form {
  width: 100%;
  height: 500px;
  padding-top: 90px;
  box-sizing: border-box;
  max-width: 600px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}
.input_group {
  width: 90%;
  margin: 0 auto 1.2rem;
  overflow: hidden;
}
label {
  display: block;
  text-transform: capitalize;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
}
input,
textarea {
  width: 90%;
  padding: 0.5rem 1rem;
}
input:focus,
textarea:focus {
  outline: none;
}
button {
  display: block;
  width: 50%;
  background: #0d6efd;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.8rem 0;
  font-size: 1.2rem;
  color: white;
  margin: 0 auto;
}
button:hover {
  transform: scale(0.99);
}
a {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;
}
</style>

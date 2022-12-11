<template>
  <div id="page-header">
    <img
      src="@/assets/stars.jpeg"
      id="space-cool"
      class="max-h-96 max-w-72 h-1/2"
    />
    <h1 class="text-5xl font-medium tracking-widest">Want to get involved?</h1>
    <h2 class="text-xl fonts-semibold">
      Here at WEST, we are always looking for more connections with our
      community.
    </h2>
  </div>
  <div class="bg-black">
    <div class="ml-20 flex flex-col">
      <div class="flex my-20 items-center">
        <p id="title" class="font-semibold text-left flex-col w-1/4">
          Why get involved?
        </p>
        <p class="flex-col text-lg text-left font-semibold my-14 mr-20 w-4/5">
          The Western Engineering Satellite Team (WEST) is a high-risk project
          that will allow students to experience the intensity & risk-factor
          associated with developing and launching a fully functional satellite
          into orbit. Engaged members will be exposed to industry standard
          engineering and project management that will allow them to develop
          skills that go far beyond what a traditional education can offer,
          providing a competitive advantage for all future employment
          opportunities.
        </p>
      </div>
      <p class="text-left mb-4 font-semibold text-xl">
        Interested in becoming a member of WEST?
      </p>
      <div class="mb-8">
        <form
          id="form"
          action="https://formsubmit.co/westernengineeringsatellite@gmail.com"
          method="POST"
          class="bg-white"
        >
          <div class="input_group">
            <label for="">name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
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
            <label for="content">Year of Study and Program</label>
            <textarea
              name="content"
              placeholder="Year of study and program"
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
p {
  color: white;
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
#title {
  font-size: 1.9rem;
  line-height: 2.6rem;
}
</style>

<template>
  <div>
    <div id="page-header">
      <img src="@/assets/sky_car.jpeg" id="space-cool" class="mt-20" />
      <h1 class="text-5xl font-medium tracking-widest">The Mission.</h1>
    </div>
    <section id="the-mission" class="flex text-white">
      <img src="@/assets/cubesat.png" id="cube-sat" class="mt-20 ml-40 mb-20" />
      <div class="font-semibold flex-col text-left mx-40 my-20">
        <p id="title">What is a CubeSat?</p>
        <br />
        <p class="text-lg">
          A CubeSat is a type of nanosatellite that is significantly cheaper to
          create than traditional satellites. CubeSat's come in different sizes
          such as 1U (10x10x10 cm), 2U (10x10x20 cm), 3U (10x10x30 cm), etc..
          They provide a more effective way to try out different technologies,
          science investigations, and more.
        </p>
        <br />
        <p class="text-lg">
          The current CubeSat is being designed to take photos of Western
          University from space! This would be a feat not yet achieved for
          Western University students! This CubeSat will be designed according
          to the regulations from the Canadian Satellite Design Challenge (CSDC)
          which we will be attending.
        </p>
      </div>
    </section>
    <section id="subteam-details" class="text-white">
      <p id="title" class="my-20 font-semibold text-left ml-40">
        Subteam Details
      </p>
      <div
        class="grid gap-x-24 gap-y-16 grid-cols-2 mx-40 text-left font-semibold mb-20"
      >
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">
            Electrical Power System
          </h4>
          <p>
            The Electrical Power System (EPS) is designed to regulate and
            distribute the power output from on-board solar panels. The power
            drawn from the solar panels will be regulated by a centralized
            system that will distribute power to the various loads. These loads
            include a secondary battery, the other subsystems, and the payload.
          </p>
          <br />
          <p>
            The secondary battery must be able to charge and discharge power to
            the other subsystems during launch and eclipse periods. The EPS
            makes sure that all power distribution is managed efficiently so
            that the most power can be obtained at any point during the mission.
          </p>
        </div>
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">
            Command and Data Handling
          </h4>
          <p>
            The Command and Data Handling system (CD&H) is intertwined with
            every single subsystem on the CubeSat. One aspect is the design of
            the onboard computer. This is the main processor for the satellite
            and makes executive decisions for all the other subsystems.
          </p>
          <br />
          <p>
            The CD&H is also responsible for developing the software that runs
            on the onboard computer as well as the secondary processors for the
            other subsystems. A data bus will be designed to allow communication
            between the subsystems. It must be robust and fast enough to
            transmit all of the necessary information and commands.
          </p>
        </div>
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">
            Attitude Determination and Control System
          </h4>
          <p>
            The Attitude Determination and Control System (ADCS) is a subsystem
            of the CubeSat that monitors and adjusts the positioning of the
            satellite in space. The attitude of a satellite refers to its
            orientation in 3D space. Correct positioning of the satellite allows
            cameras, sensors and solar panels to face an appropriate direction
            and the stabilization of the satellite provides these components
            with a steady structure.
          </p>
          <br />
          <p>
            The attitude of the CubeSat can be determined using a variety of
            sensors including sun sensors, gyroscopes and magnetometers. After
            the orientation of the satellite is determined, the attitude can be
            adjusted using magnetorquers that interact with the Earth's magnetic
            field and reaction wheels.
          </p>
        </div>
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">Payload</h4>
          <p>
            The Payload system will be deciding what the mission of the CubeSat
            is, and what is going to be studied while in space. Whether it be
            Earth observation, communication, navigation, or science and
            technology, we will be looking into experiments that have been done
            in space and figuring out what needs to be done to determine our
            payload and mission goals. Once we have decided on our payload, we
            will work with other teams to implement it into the CubeSat itself.
          </p>
        </div>
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">
            Communications
          </h4>
          <p>
            The Communications system encompasses everything involved in
            allowing the CubeSat to talk to us on Earth. Both the CubeSat and
            the ground station have antennas for sending and receiving
            information. We're designing the associated electronics to be
            specialized for the rain, clouds, and distance the radio waves pass
            through during communication. We're responsible for selecting the
            protocols of encoding and writing the information, to make sure that
            all information is clearly received.
          </p>
        </div>
        <div>
          <h4 class="text-2xl font-bold dark:text-white pb-4">Structures</h4>
          <p>
            The Structures system is about designing the chassis of the CubeSat
            using a CAD program and using that design to then construct and test
            it. The goal of the structures team is to construct a robust and
            lightweight frame that can withstand the journey to space and will
            protect the components within it while completing it's mission. We
            will also be working on machining and constructing the chassis and
            other components using space grade materials.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "MissionPageView",
  components: {},
});
</script>

<style scoped>
#space-cool {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/space-cool.png");

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
h1 {
  color: white;
  position: absolute;
  top: 0;
  width: 40%;
  height: 55%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align */
}
#the-mission {
  padding: 1% 0;
  position: relative;
  background: black;
  box-shadow: 0px -10px 60px rgba(0, 0, 0, 0.25);
  height: 100%;
}
#cube-sat {
  width: 300px;
  height: 300px;
}
#title {
  font-size: 1.9rem;
  line-height: 2.6rem;
}
#subteam-details {
  padding: 1% 0;
  position: relative;
  background: linear-gradient(black, #011f01);
  box-shadow: 0px -10px 60px rgba(0, 0, 0, 0.25);
  height: 100%;
}
</style>

import React from "react";
import Typewriter from "typewriter-effect";



// this file controls the part of the home page for the animated text. 


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Exploration",
          "The Unknown",
          "Failing Stars",
          "The Universe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

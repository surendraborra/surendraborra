import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "SKILLS:React,PostgreSQL,Node.js",
              "An Enthusiastic Programmer",
             
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type
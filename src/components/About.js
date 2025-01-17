import React from "react";
import Links from "./Links";
import user from "../data/user";

function About({ bio, links = user.links }) {
  // Do not render <p> if bio is empty or undefined
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>} {/* Only render <p> if bio has a value */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

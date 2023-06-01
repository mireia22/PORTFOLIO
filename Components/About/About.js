import "./About.css";
import { ANCHORS } from "../../Constants";

export const renderAbout = () => {
  const aboutSection = document.querySelector("#page-content");

  const aboutAnchor = ANCHORS.find((anchor) => anchor.text === "Contact");

  const aboutTemplate = `
      <h2 class="section-title"><span>About</span></h2>
      <div class="about-text">
        <div class="first-text">
          <h1>Hi! I'm <span>Mireia</span>,</h1>
          <h3>a passionate</h3>
        </div>

        <div class="my-image">       
          <img src="./public/assets/images/my-photo.png" alt="my-photo" />
        </div>

        <div class="text-animate">
          <h1>full-stack developer</h1>
        </div>
        
        <p>Problem solver, well-organised person with high attention to detail. 
          Building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences. 
          <br><br>Fan of nature, outdoor activities, and coding of course.
          Interested in the entire fullstack spectrum and working on ambitious projects with interesting people.
        </p>
      </div>
      <a href="${aboutAnchor.href}" class="about-contact-anchor">${aboutAnchor.text2}</a>
  `;

  aboutSection.innerHTML += aboutTemplate;
};

import "./Hero.css";
import { LOGOS } from "../../Constants";
import { ANCHORS } from "../../Constants";

export const renderHero = () => {
  const heroContainer = document.querySelector("#page-content");

  let logoTemplate = "";
  LOGOS.forEach((logo) => {
    logoTemplate += `
    <a href="${logo.href}">
      <img src="${logo.src}" alt="${logo.name}">
    </a>
      `;
  });

  const aboutAnchor = ANCHORS.find((anchor) => anchor.text === "About");
  heroContainer.innerHTML = `
      <article class="hero-container">
        <div class="hero-title">
          <h1>full-stack <br>software <br>developer</h1>
        </div>
        <div class="hero-anchor">
          <a href="${aboutAnchor.href}" class="about-anchor">${aboutAnchor.text}</a>
          <img src="./assets/icons/down-arrow.png" alt="arrow" />
        </div>
        <div class="hero-logo">
          ${logoTemplate}
        </div>
      </article>
    `;
};

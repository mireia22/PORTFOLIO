import "./Header.css";
import { ANCHORS } from "../../Constants";

//UPHEADER
export const renderUpHeader = () => {
  const upHeader = document.querySelector(".up-header");
  ANCHORS.find((anchor) => {
    anchor.name === "contact";
    const upHeaderTemplate = `
  <img src="./assets/icons/logo/white-logo.png" alt="Home" class="home-icon" />
  <a href="${anchor.href}" class="contact-anchor">${anchor.text}</a>
  `;
    upHeader.innerHTML = upHeaderTemplate;
  });
};

//DOWNHEADER

export const renderDownHeader = () => {
  const downHeader = document.querySelector(".down-header");
  ANCHORS.slice(1, 4).forEach((e) => {
    const anchoreTemplate = `
    <a href="${e.href}" class="anchor">${e.text}</a>
    `;
    downHeader.innerHTML += anchoreTemplate;
  });
};

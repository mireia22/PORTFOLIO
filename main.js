import { renderHero } from "./Components/Hero/Hero";
import { renderSkills } from "./Components/Skills/Skills";
import { renderUpHeader, renderDownHeader } from "./Components/Header/Header";
import { renderAbout } from "./Components/About/About";
import { renderStudies } from "./Components/Education/Education";
import { renderContact } from "./Components/Contact/Contact";
import { renderProjects } from "./Components/Projects/Projects";
import { renderFooter } from "./Components/Footer/Footer";

const defaultRender = () => {
  const main = document.querySelector(".app");

  const mainTemplate = `
      ${renderUpHeader()}
      ${renderDownHeader()}
      ${renderFooter()}
    `;
  main.innerHTML += mainTemplate;
  const pageContent = document.querySelector("#page-content");
  pageContent + renderHero();
};

const renderAnchoresContent = () => {
  const anchors = document.querySelectorAll("a");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const linkHref = e.target.href;
      const pageContent = document.querySelector("#page-content");
      pageContent.innerHTML = "";

      if (linkHref.includes("/skills")) {
        pageContent + renderSkills();
      } else if (linkHref.includes("/education")) {
        pageContent.innerHTML + renderStudies();
      } else if (linkHref.includes("/projects")) {
        pageContent + renderProjects();
      } else if (linkHref.includes("/about")) {
        pageContent + renderAbout();
      } else if (linkHref.includes("/contact")) {
        pageContent + renderContact();
      }
    });
  });

  const homeLogo = document.querySelector(".home-icon");
  homeLogo.addEventListener("click", renderHero);
};

defaultRender();
renderAnchoresContent();

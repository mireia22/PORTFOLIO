import { PROJECTS } from "../../Constants";
import "./Projects.css";

export const renderProjects = (filteredProjects = PROJECTS) => {
  const projectsContainer = document.querySelector("#page-content");
  let titleTemplate = `
  <h2 class="section-title"> My <span>Projects</span></h2>
  <h4>Filter by used Tools </h4>
  <article class="buttons-container"></article>
  <article class="projects-box"></article>

  `;

  projectsContainer.innerHTML = titleTemplate;

  filteredProjects.forEach((project) => {
    const projectsBox = document.querySelector(".projects-box");
    const projectHTML = `
      <div class="project-container">
        <div class="project-text">
          <h1>${project.title}</h1>
          <h3>${project.supratitle}</h3>
          <p>${project.description}</p>
        </div>
        <div class="tools-title">
          <img src="./assets/icons/instrumentos.png" alt="my-photo" />
          <p>Built with:</p>
        </div>
        <div class="tools">
         <p> ${project.tools.join(", ")}</p>
        </div>
        <div class="preview">       
          <img src="${project.preview}" alt="${project.title}" />
        </div>
        <div class="anchores">
          <a href="${project.code}">View the code</a>
          <a href="${project.app}">Visit the app</a>
        </div>
      </div>
    `;
    projectsBox.innerHTML += projectHTML;
  });
  createButtons();
  createFilter();
};

const createButtons = () => {
  const buttonsContainer = document.querySelector(".buttons-container");
  let allButtons = [];
  buttonsContainer.innerHTML = "";

  PROJECTS.forEach((project) => {
    let allTools = project.tools;

    allTools.forEach((tool) => {
      if (!allButtons.includes(tool)) {
        allButtons.push(tool);
        buttonsContainer.innerHTML += `
        <button class="tool-button">${tool}</button>
`;
      }
    });
  });
};

const createFilter = () => {
  const buttons = document.querySelectorAll(".tool-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedTool = e.target.innerText;
      button.id = selectedTool;

      const filteredProjects = PROJECTS.filter((project) =>
        project.tools.includes(selectedTool)
      );

      renderProjects(filteredProjects);
    });
  });
};

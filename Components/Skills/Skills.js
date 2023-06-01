import "./Skills.css";
import { SKILLS } from "../../Constants";

export const renderSkills = () => {
  const skillsSection = document.querySelector("#page-content");

  let titleTemplate = `
  <h2 class="section-title"> My <span>Skills</span></h2>

  `;
  skillsSection.innerHTML = titleTemplate;

  SKILLS.forEach((category) => {
    const categoryTemplate = `
    
      <div class="category">
          <h2 class="module-name">${category.name}</h2>
          <ul class="skills-list"></ul>
      </div>
   
    `;
    skillsSection.innerHTML += categoryTemplate;

    const categoryElement = skillsSection.lastElementChild;
    const ul = categoryElement.querySelector(".skills-list");

    category.skills.forEach((skill) => {
      const liTemplate = `
      <li class="skill">
        <span class="name">${skill.name}
        </span>
        <div class="skill-icon">
          <img src="${skill.icon}" alt="${skill.name}">
        </div>
      </li>
          `;
      ul.innerHTML += liTemplate;
    });
  });
};

import "./Education.css";
import { STUDIES } from "../../Constants";
export const renderStudies = () => {
  const educationSection = document.querySelector("#page-content");
  let educationTemplate = `<h2 class="section-title"> My <span>Journey</span></h2>
          <div class="education-box"> </div>

     `;
  educationSection.innerHTML = educationTemplate;

  STUDIES.reverse().forEach((studie) => {
    const educationBox = document.querySelector(".education-box");
    const studiesTemplate = `
            <div class="education-content">
              <div class="content">
                <div class="year">       
                    <img src="./public/assets/icons/calendar.png" alt="calendar" />
                    ${studie.year}
                </div>
                <h3>${studie.degree}</h3>
                <p>${studie.description}</p>
                <img src="${studie.icon}" alt="${studie.degree}" />
              </div>
            </div>
`;
    educationBox.innerHTML += studiesTemplate;
  });
};

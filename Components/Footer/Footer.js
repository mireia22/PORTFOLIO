import "./Footer.css";

export const renderFooter = () => {
  const footerContainer = document.querySelector(".footer");

  const footerTemplate = `
        <div class="footer-content">
          <p>&copy; 2023 Mire. All rights reserved.</p>
        </div>
        `;
  footerContainer.innerHTML += footerTemplate;
};

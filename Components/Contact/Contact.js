import "./Contact.css";

export const renderContact = () => {
  const contactContainer = document.querySelector("#page-content");
  let contactTemplate = `<h2 class="section-title"><span>Contact</span></h2>
`;
  let formTemplate = `
<form action="#">
      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div class="input-field">
          <input type="text" placeholder="Company" required />
        </div>
      </div>
      <div class="input-box">
        <div class="input-field">
          <input type="number" placeholder="Mobile number" required />
        </div>
        <div class="input-field">
          <input type="text" placeholder="Email" required />
        </div>
      </div>

      <div class="textarea">
        <textarea
          name=""
          id=""
          cols="40"
          rows="10"
          placeholder="your message"
          required
        ></textarea>
      </div>

      <div class="button">
        <button type="submit">Submit</button>
      </div>
    </form>
`;
  contactContainer.innerHTML = contactTemplate + formTemplate;

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        input.style.background = "white";
      } else {
        input.style.background =
          "-webkit-linear-gradient(rgba(6, 90, 96, 0.4),rgba(77, 25, 77, 0.4)";
        input.style.border = "1px solid white";
      }
    });
  });
};

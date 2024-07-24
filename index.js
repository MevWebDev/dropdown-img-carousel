const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", () => {
  dropdownContent.style.display = "flex";
});
dropdownContent.addEventListener("mouseout", () => {
  dropdownContent.style.display = "none";
});

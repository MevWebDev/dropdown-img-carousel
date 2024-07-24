const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
console.log(dropdownContent);
dropdown.addEventListener("mouseover", () => {
  dropdownContent.style.display = "flex";
});
dropdown.addEventListener("mouseout", () => {
  dropdownContent.style.display = "none";
});

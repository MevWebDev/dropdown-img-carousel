let timeoutId;
let idx = 2;

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", () => {
  clearTimeout(timeoutId); // Clear the timeout if you quickly go back to the dropdown
  dropdownContent.style.display = "flex";
});

dropdown.addEventListener("mouseleave", () => {
  // Set a timeout before hiding the dropdown content
  timeoutId = setTimeout(() => {
    dropdownContent.style.display = "none";
  }, 100); // 500ms delay
});

dropdownContent.addEventListener("mouseover", () => {
  clearTimeout(timeoutId); // Clear the timeout if you reach the dropdown content
});

dropdownContent.addEventListener("mouseleave", () => {
  // Hide the dropdown content when you leave it
  dropdownContent.style.display = "none";
});

const images = [
  {
    src: "https://via.placeholder.com/800x400?text=1",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/800x400?text=2",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/800x400?text=3",
    alt: "Image 3",
  },
  {
    src: "https://via.placeholder.com/800x400?text=4",
    alt: "Image 4",
  },
  {
    src: "https://via.placeholder.com/800x400?text=5",
    alt: "Image 5",
  },
];

const buttons = document.querySelectorAll(".btn");

function generateImages(arr, index1, index2, index3) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttons[idx].classList.add("active");
  const imagesDiv = document.querySelector(".images");
  imagesDiv.innerHTML = "";
  const img1 = document.createElement("img");
  img1.src = arr[index1].src;
  imagesDiv.appendChild(img1);
  const img2 = document.createElement("img");
  img2.src = arr[index2].src;
  imagesDiv.appendChild(img2);
  const img3 = document.createElement("img");
  img3.src = arr[index3].src;
  imagesDiv.appendChild(img3);
}

function carousel() {
  const buttons = document.querySelectorAll(".btn");

  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");

  previous.addEventListener("click", () => {
    idx = (idx - 1 + images.length) % images.length;
    generateImages(
      images,
      (idx - 1 + images.length) % images.length,
      idx,
      (idx + 1) % images.length
    );
  });
  next.addEventListener("click", () => {
    idx = (idx + 1) % images.length;
    generateImages(
      images,
      (idx - 1 + images.length) % images.length,
      idx,
      (idx + 1) % images.length
    );
  });

  buttons[Math.floor(buttons.length / 2)].classList.add("active");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      idx = index;
      button.classList.add("active");
      if (index > 0 && index < images.length - 1) {
        generateImages(images, index - 1, index, index + 1);
      } else if (index === 0) {
        generateImages(images, images.length - 1, index, index + 1);
      } else if (index === images.length - 1) {
        generateImages(images, index - 1, index, 0);
      }
    });
  });
}

carousel();
generateImages(images, idx - 1, idx, idx + 1);

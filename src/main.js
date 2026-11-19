import './style.css'
const newWomenProducts = [
  {
    image: "./new-arrivals/bag.avif",
    title: "Women's Bags"
  },
  {
    image: "./new-arrivals/w-ready-to-wear.avif",
    title: "Women's Ready to Wear"
  },
  {
    image: "./new-arrivals/w-shoes.avif",
    title: "Women's Shoes"
  },
  {
    image: "./new-arrivals/w-acc.avif",
    title: "Women's Accessories"
  }
];
const newMenProducts = [
  {
    image: "./new-arrivals/m-bag.avif",
    title: "Men's Bags"
  },
  {
    image: "./new-arrivals/m-ready-to-wear.avif",
    title: "Men's Ready to Wear"
  },
  {
    image: "./new-arrivals/m-shoes.avif",
    title: "Men's Shoes"
  },
  {
    image: "./new-arrivals/m-acc.avif",
    title: "Men's Accessories"
  }
];
const newProducts = document.getElementById("newProducts");

const newWomenBtn = document.getElementById("newWomenBtn");
const newMenBtn = document.getElementById("newMenBtn");

const newImages = [
  document.getElementById("newImage1"),
  document.getElementById("newImage2"),
  document.getElementById("newImage3"),
  document.getElementById("newImage4")
];

const newTitles = [
  document.getElementById("newTitle1"),
  document.getElementById("newTitle2"),
  document.getElementById("newTitle3"),
  document.getElementById("newTitle4")
];

function changeNewProducts(data) {
  newProducts.classList.add("opacity-0");
  setTimeout(() => {
    for (let i = 0; i < data.length; i++) {
      newImages[i].src = data[i].image;
      newImages[i].alt = data[i].title;
      newTitles[i].textContent = data[i].title;
    }
    newProducts.classList.remove("opacity-0");

  }, 700);
}
newWomenBtn.addEventListener("click", () => {
  changeNewProducts(newWomenProducts);
  newWomenBtn.classList.add(
    "font-semibold",
    "border-b",
    "border-black"
  );
  newMenBtn.classList.remove(
    "font-semibold",
    "border-b",
    "border-black"
  );
});
newMenBtn.addEventListener("click", () => {
  changeNewProducts(newMenProducts);
  newMenBtn.classList.add(
    "font-semibold",
    "border-b",
    "border-black"
  );
  newWomenBtn.classList.remove(
    "font-semibold",
    "border-b",
    "border-black"
  );
});

const bagWomenProducts = [
  {
    image: "./bag-collection/w-1.avif",
    title: "Prada Route"
  },
  {
    image: "./bag-collection/w-2.avif",
    title: "Prada Galleria"
  },
  {
    image: "./bag-collection/w-3.avif",
    title: "Prada Bonnie"
  },
  {
    image: "./bag-collection/w-4.avif",
    title: "Prada Carry"
  }
];

const bagMenProducts = [
  {
    image: "./bag-collection/m-1.avif",
    title: "Prada Bonnie"
  },
  {
    image: "./bag-collection/m-2.avif",
    title: "Prada Explore"
  },
  {
    image: "./bag-collection/m-3.avif",
    title: "Prada Soft Bags "
  },
  {
    image: "./bag-collection/m-4.avif",
    title: "Prada Brique"
  }
];

const bagProducts = document.getElementById("bagProducts");
const bagWomenBtn = document.getElementById("bagWomenBtn");
const bagMenBtn = document.getElementById("bagMenBtn");

const bagImages = [
  document.getElementById("bagImage1"),
  document.getElementById("bagImage2"),
  document.getElementById("bagImage3"),
  document.getElementById("bagImage4")
];
const bagTitles = [
  document.getElementById("bagTitle1"),
  document.getElementById("bagTitle2"),
  document.getElementById("bagTitle3"),
  document.getElementById("bagTitle4")
];

function changeBagProducts(data) {

  bagProducts.classList.add("opacity-0");
  setTimeout(() => {
    for (let i = 0; i < data.length; i++) {
      bagImages[i].src = data[i].image;
      bagImages[i].alt = data[i].title;
      bagTitles[i].textContent = data[i].title;
    }
    bagProducts.classList.remove("opacity-0");
  }, 700);
}
bagWomenBtn.addEventListener("click", () => {
  changeBagProducts(bagWomenProducts);
  bagWomenBtn.classList.add(
    "font-semibold",
    "border-b",
    "border-black"
  );
  bagMenBtn.classList.remove(
    "font-semibold",
    "border-b",
    "border-black"
  );
});

bagMenBtn.addEventListener("click", () => {
  changeBagProducts(bagMenProducts);
  bagMenBtn.classList.add(
    "font-semibold",
    "border-b",
    "border-black"
  );
  bagWomenBtn.classList.remove(
    "font-semibold",
    "border-b",
    "border-black"
  );
});
const topPlants = [
  {
    name: "Monstera Deliciosa",
    description: "Iconic split leaves and a striking sculptural presence.",
    price: "R1,250",
    image: "images/plants/Monstera.png"
  },
  {
    name: "Snake Plant",
    description: "Architectural, hardy, and ideal for low light spaces.",
    price: "R650",
    image: "images/plants/snake-Plant.png"
  },
  {
    name: "Peace Lily",
    description: "Elegant foliage with graceful white blooms.",
    price: "R780",
    image: "images/plants/peacleily.png"
  },
  {
    name: "Fiddle Leaf Fig",
    description: "Large glossy leaves that make a bold statement.",
    price: "R1,480",
    image: "images/plants/fiddle leaf fig.png"
  },
  {
    name: "ZZ Plant",
    description: "Low maintenance and perfect for busy interiors.",
    price: "R720",
    image: "images/plants/zz plant.png"
  },
  {
    name: "Golden Pothos",
    description: "Vining greenery that trails beautifully from shelves.",
    price: "R590",
    image: "images/plants/Golden Pothos.png"
  },
  {
    name: "Aloe Vera",
    description: "A soothing succulent with sculptural, practical charm.",
    price: "R420",
    image: "images/plants/Calathea.png"
  }
];

const cataloguePlants = [
  { name: "Monstera Deliciosa", description: "A lush tropical favourite with dramatic perforated leaves.", price: "R1,250", image: "images/plants/plant-placeholder.svg" },
  { name: "Snake Plant", description: "Bold vertical foliage that thrives in low light conditions.", price: "R650", image: "images/plants/plant-placeholder.svg" },
  { name: "Peace Lily", description: "Elegant leaves with soft white blooms and a soothing look.", price: "R780", image: "images/plants/plant-placeholder.svg" },
  { name: "Fiddle Leaf Fig", description: "Classic statement plant with large, glossy leaves.", price: "R1,480", image: "images/plants/plant-placeholder.svg" },
  { name: "ZZ Plant", description: "Hardy and glossy, perfect for enduring indoor conditions.", price: "R720", image: "images/plants/plant-placeholder.svg" },
  { name: "Golden Pothos", description: "Easy care trailing vine with rich, luminous green tones.", price: "R590", image: "images/plants/plant-placeholder.svg" },
  { name: "Aloe Vera", description: "A sculptural succulent beloved for its soothing gel.", price: "R420", image: "images/plants/plant-placeholder.svg" },
  { name: "Spider Plant", description: "Arching leaves and playful baby offshoots for movement.", price: "R500", image: "images/plants/plant-placeholder.svg" },
  { name: "Rubber Plant", description: "Full glossy leaves add warmth and depth to interiors.", price: "R980", image: "images/plants/plant-placeholder.svg" },
  { name: "Boston Fern", description: "Soft feathery fronds that lend a fresh, airy feel.", price: "R760", image: "images/plants/plant-placeholder.svg" },
  { name: "Chinese Evergreen", description: "Colourful leaves with enduring elegance and resilience.", price: "R690", image: "images/plants/plant-placeholder.svg" },
  { name: "Dracaena", description: "Slim architectural leaves that suit modern spaces beautifully.", price: "R810", image: "images/plants/plant-placeholder.svg" },
  { name: "Calathea", description: "Striking patterned foliage with a gentle, tropical presence.", price: "R880", image: "images/plants/plant-placeholder.svg" },
  { name: "Bird of Paradise", description: "Bold leaves that bring instant tropical drama to a room.", price: "R1,620", image: "images/plants/plant-placeholder.svg" },
  { name: "Philodendron", description: "Lush heart-shaped foliage with relaxed indoor appeal.", price: "R740", image: "images/plants/plant-placeholder.svg" },
  { name: "Areca Palm", description: "Soft feathered fronds that create a calm, airy feel.", price: "R1,090", image: "images/plants/plant-placeholder.svg" },
  { name: "Jade Plant", description: "A classic succulent with rich green, rounded leaves.", price: "R560", image: "images/plants/plant-placeholder.svg" },
  { name: "Anthurium", description: "Bright glossy leaves and lasting colour for bold display.", price: "R940", image: "images/plants/plant-placeholder.svg" },
  { name: "English Ivy", description: "Trailing greenery that works perfectly in hanging planters.", price: "R430", image: "images/plants/plant-placeholder.svg" },
  { name: "Parlor Palm", description: "Compact and graceful, with soft texture and gentle movement.", price: "R680", image: "images/plants/plant-placeholder.svg" },
  { name: "String of Pearls", description: "A trailing succulent with delicate bead-like foliage.", price: "R480", image: "images/plants/plant-placeholder.svg" },
  { name: "Orchid", description: "An elegant bloom that adds softness and luxury to any space.", price: "R1,320", image: "images/plants/plant-placeholder.svg" }
];

const galleryImages = Array.from({ length: 25 }, (_, index) => ({
  src: "images/gallery/gallery-placeholder.svg",
  alt: `Botanical display ${index + 1}`
}));

function renderCardGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <img src="${item.image}" alt="${item.name}" />
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="price">${item.price}</span>
            <a class="button" href="#contact">Enquire</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  container.innerHTML = galleryImages
    .map(
      (image) => `
        <div class="gallery-item">
          <img src="${image.src}" alt="${image.alt}" />
        </div>
      `
    )
    .join("");
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderCardGrid("top-selling-grid", topPlants);
renderCardGrid("catalogue-grid", cataloguePlants);
renderGallery();

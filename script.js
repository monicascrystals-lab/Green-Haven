const topPlants = [
  {
    name: "Monstera Deliciosa",
    description: "Iconic split leaves and a striking sculptural presence.",
    price: "R250",
    image: "images/plants/Monstera.png"
  },
  {
    name: "Snake Plant",
    description: "Architectural, hardy, and ideal for low light spaces.",
    price: "R300",
    image: "images/plants/snake.png"
  },
  {
    name: "Peace Lily",
    description: "Elegant foliage with graceful white blooms.",
    price: "R200",
    image: "images/plants/peacelily.png"
  },
  {
    name: "Fiddle Leaf Fig",
    description: "Large glossy leaves that make a bold statement.",
    price: "R500",
    image: "images/plants/fiddleleaf.png"
  },
  {
    name: "ZZ Plant",
    description: "Low maintenance and perfect for busy interiors.",
    price: "R170",
    image: "images/plants/zzplant.png"
  },
  {
    name: "Golden Pothos",
    description: "Vining greenery that trails beautifully from shelves.",
    price: "R99",
    image: "images/plants/goldenpothos.png"
  },
  {
    name: "Aloe Vera",
    description: "A soothing succulent with sculptural, practical charm.",
    price: "R177",
    image: "images/plants/aloevera.png"
  }
];

const cataloguePlants = [
  { name: "Monstera Deliciosa", description: "A lush tropical favourite with dramatic perforated leaves.", price: "R250", image: "images/plants/monstera.png" },
  { name: "Snake Plant", description: "Bold vertical foliage that thrives in low light conditions.", price: "R300", image: "images/plants/snake.png" },
  { name: "Peace Lily", description: "Elegant leaves with soft white blooms and a soothing look.", price: "R200", image: "images/plants/peacelily.png" },
  { name: "Fiddle Leaf Fig", description: "Classic statement plant with large, glossy leaves.", price: "R500", image: "images/plants/fiddleleaf.png" },
  { name: "ZZ Plant", description: "Hardy and glossy, perfect for enduring indoor conditions.", price: "R170", image: "images/plants/zzplant.png" },
  { name: "Golden Pothos", description: "Easy care trailing vine with rich, luminous green tones.", price: "R99", image: "images/plants/goldenpothos.png" },
  { name: "Aloe Vera", description: "A sculptural succulent beloved for its soothing gel.", price: "R177", image: "images/plants/aloevera.png" },
  { name: "Spider Plant", description: "Arching leaves and playful baby offshoots for movement.", price: "R500", image: "images/plants/spider.png" },
  { name: "Rubber Plant", description: "Full glossy leaves add warmth and depth to interiors.", price: "R980", image: "images/plants/rubber.png" },
  { name: "Calathea", description: "Striking patterned foliage with a gentle, tropical presence.", price: "R880", image: "images/plants/calathea.png" },
  { name: "Bird of Paradise", description: "Bold leaves that bring instant tropical drama to a room.", price: "R1,620", image: "images/plants/birdofparadise.png" },
  { name: "Flamino Flower", description: "Lush heart-shaped foliage with relaxed indoor appeal.", price: "R740", image: "images/plants/flamingoflower.png" },
  { name: "Areca Palm", description: "Soft feathered fronds that create a calm, airy feel.", price: "R1,090", image: "images/plants/arecapalm.png" },
  { name: "Jade Plant", description: "A classic succulent with rich green, rounded leaves.", price: "R560", image: "images/plants/jade.png" },
  { name: "Anthurium", description: "Bright glossy leaves and lasting colour for bold display.", price: "R940", image: "images/plants/anthurium.png" },
  { name: "English Ivy", description: "Trailing greenery that works perfectly in hanging planters.", price: "R430", image: "images/plants/englishivy.png" },
  { name: "Parlor Palm", description: "Compact and graceful, with soft texture and gentle movement.", price: "R680", image: "images/plants/parlorpalm.png" },
  { name: "String of Pearls", description: "A trailing succulent with delicate bead-like foliage.", price: "R480", image: "images/plants/stringofpearls.png" },
  { name: "Orchid", description: "An elegant bloom that adds softness and luxury to any space.", price: "R1,320", image: "images/plants/orchid.png" }
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
          <img src="${plant.image}" alt="${plant.name}">
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

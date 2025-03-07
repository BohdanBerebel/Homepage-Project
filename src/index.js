import "./styles.css";
import { createClient } from "pexels";

const client = createClient("");
const query = ["Nature", "Anime", "Sea", "Sky", "Cars"];
let random = query[Math.floor(Math.random() * 5)];

client.photos.search({ query: random, per_page: 6, page: 6 }).then((photos) => {
  const imgs = document.querySelectorAll(".project > img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].alt = `${photos.photos[i].alt}`;
    imgs[i].src = `${photos.photos[i].src.tiny}`;
  }
});

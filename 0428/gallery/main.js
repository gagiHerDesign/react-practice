const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alts = [
  "eye", "sand", "flower", "person", "leaf"
];

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  // 新增img標籤
  const newImage = document.createElement('img');

  // 設圖片的屬性值
  newImage.setAttribute('src', `./images/${ images[i] }`);
  newImage.setAttribute('alt', alts[i]);

  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  })

};


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute("class")

  if (btnClass === "dark") {
    btn.setAttribute('class', 'light')
    btn.textContent = "lighten"
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = "darken"
    overlay.style.backgroundColor = "rgba(0,0,0,0)"
  }
})
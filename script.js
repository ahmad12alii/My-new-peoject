// امیجز کی لسٹ بنائیں
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg', // نیا امیج
    'image6.jpg' // نیا امیج
];

let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length; // اگلی امیج پر جائیں
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
}
let loginButton = document.querySelector('login_button');
const container = document.querySelector(".main_content_otels"); 
const liLogIn = document.getElementById("LogIn");
const liSignIn = document.getElementById("SignIn");
const switchButton = document.querySelector('.switch_button');
const buttonContent = document.querySelector('.button_content');
const navItems = document.querySelectorAll('.nav_content_category li');


// liLogIn.addEventListener("click", function() {
//   var modal = new bootstrap.Modal(document.getElementById("logModal"));
//   modal.show();
// });


liSignIn.addEventListener("click", function() {
  var modal = new bootstrap.Modal(document.getElementById("signModal"));
  modal.show();
});

const hotels = [
  {
    id: 1,
    img1: ("../assets/gallery/Loutraki, Yunanistan.webp"),
    img2: ("../assets/gallery/Loutraki, Yunanistan2.webp"),
    img3: ("../assets/gallery/Loutraki, Yunanistan3.webp"),
    img4: ("../assets/gallery/Loutraki, Yunanistan4.webp"),
    img5: ("../assets/gallery/Loutraki, Yunanistan5.webp"),
    country: "Kalyves, Yunanistan",
    puan: 4.3,
    title: "design",
    host: "Maria ile qonaqlayın",
    date1: "27 May",
    date2: "5 İyun",
    price: 50,
    night: "gecə"
  },
  {
    id: 2,
    img1: ("../assets/gallery/Ölüdeniz, Türkiye1.webp"),
    img2: ("../assets/gallery/Ölüdeniz, Türkiye2.webp"),
    img3: ("../assets/gallery/Ölüdeniz, Türkiye3.webp"),
    img4: ("../assets/gallery/Ölüdeniz, Türkiye4.webp"),
    img5: ("../assets/gallery/Ölüdeniz, Türkiye5.webp"),
    country: "Ölüdeniz, Türkiye",
    puan: 4.8,
    title: "hovuz",
    host: "Ahmet ilə qonaqlayın",
    date1: "15 İyun",
    date2: "25 İyun",
    price: 80,
    night: "gecə"
  },
  {
    id: 3,
    img1: "../assets/gallery/Otel 3 - Lux1.webp",
    img2: "../assets/gallery/Otel 3 - Lux2.webp",
    img3: "../assets/gallery/Otel 3 - Lux3.webp",
    img4: "../assets/gallery/Otel 3 - Lux4.webp",
    img5: "../assets/gallery/Otel 3 - Lux5.webp",
    country: "Paris, Fransa",
    puan: 4.7,
    title: "lux",
    host: "Sophie ilə qonaqlayın",
    date1: "10 İyul",
    date2: "20 İyul",
    price: 120,
    night: "gecə"
  },
  {
    id: 4,
    img1: "../assets/gallery/Otel 4 - Ev1.webp",
    img2: "../assets/gallery/Otel 4 - Ev2.webp",
    img3: "../assets/gallery/Otel 4 - Ev3.webp",
    img4: "../assets/gallery/Otel 4 - Ev4.webp",
    img5: "../assets/gallery/Otel 4 - Ev5.webp",
    country: "Bali, Endonezya",
    puan: 4.6,
    title: "ev",
    host: "Wayan ilə qonaqlayın",
    date1: "5 Avq",
    date2: "15 Avq",
    price: 90,
    night: "gecə"
  },
  {
    id: 5,
    img1: "../assets/gallery/Otel 5 - Hovus1.webp",
    img2: "../assets/gallery/Otel 5 - Hovus2.webp",
    img3: "../assets/gallery/Otel 5 - Hovus3.webp",
    img4: "../assets/gallery/Otel 5 - Hovus4.webp",
    img5: "../assets/gallery/Otel 5 - Hovus5.webp",
    country: "Phuket, Tayland",
    puan: 4.2,
    title: "hovus",
    host: "Sawadee ilə qonaqlayın",
    date1: "12 Sen",
    date2: "22 Sen",
     price: 70,
    night: "gecə"
  },
  {
    id: 6,
    img1: "../assets/gallery/Otel 6 - Camp1.webp",
    img2: "../assets/gallery/Otel 6 - Camp2.webp",
    img3: "../assets/gallery/Otel 6 - Camp3.webp",
    img4: "../assets/gallery/Otel 6 - Camp4.webp",
    img5: "../assets/gallery/Otel 6 - Camp5.webp",
    country: "Queenstown, Yeni Zelanda",
    puan: 4.8,
    title: "camp",
    host: "Mark ilə qonaqlayın",
    date1: "3 Noy",
    date2: "13 Noy",
     price: 150,
    night: "gecə"
  },
  {
    id: 7,
    img1: "../assets/gallery/Otel 7 - Triplex1.webp",
    img2: "../assets/gallery/Otel 7 - Triplex2.webp",
    img3: "../assets/gallery/Otel 7 - Triplex3.webp",
    img4: "../assets/gallery/Otel 7 - Triplex4.webp",
    img5: "../assets/gallery/Otel 7 - Triplex5.webp",
    country: "Dubai, Birleşik Arap Emirlikleri",
    puan: 4.6,
    title: "triplex",
    host: "Ali ilə qonaqlayın",
    date1: "20 Dek",
    date2: "30 Dek",
     price: 200,
    night: "gecə"
  },
  {
    id: 8,
    img1: "../assets/gallery/Otel 8 - Tropic1.webp",
    img2: "../assets/gallery/Otel 8 - Tropic2.webp",
    img3: "../assets/gallery/Otel 8 - Tropic3.webp",
    img4: "../assets/gallery/Otel 8 - Tropic4.webp",
    img5: "../assets/gallery/Otel 8 - Tropic5.webp",
    country: "Phuket, Tayland",
    puan: 4.7,
    title: "tropic",
    host: "Natasha ilə qonaqlayın",
    date1: "15 Fev",
    date2: "25 Fev",
     price: 180,
    night: "gecə"
  },
  {
    id: 9,
    img1: "../assets/gallery/Otel 9 - Favori1.webp",
    img2: "../assets/gallery/Otel 9 - Favori2.webp",
    img3: "../assets/gallery/Otel 9 - Favori3.webp",
    img4:     "../assets/gallery/Otel 9 - Favori4.webp",
    img5: "../assets/gallery/Otel 9 - Favori5.webp",
    country: "Rio de Janeiro, Brezilya",
    puan: 4.5,
    title: "favori",
    host: "Carlos ilə qonaqlayın",
    date1: "10 Mar",
    date2: "20 Mar",
     price: 160,
    night: "gecə"
  },
  {
    id: 10,
    img1: "../assets/gallery/Otel 10 - Sorf1.webp",
    img2: "../assets/gallery/Otel 10 - Sorf2.webp",
    img3: "../assets/gallery/Otel 10 - Sorf3.webp",
    img4: "../assets/gallery/Otel 10 - Sorf4.webp",
    img5: "../assets/gallery/Otel 10 - Sorf5.webp",
    country: "Bali, Endonezya",
    puan: 4.4,
    title: "sorf",
    host: "Kadek ilə qonaqlayın",
    date1: "5 Apr",
    date2: "15 Apr",
     price: 100,
    night: "gecə"
  },
  {
    id: 11,
    img1: "../assets/gallery/Otel 11 - Sahil1.webp",
    img2: "../assets/gallery/Otel 11 - Sahil2.webp",
    img3: "../assets/gallery/Otel 11 - Sahil3.webp",
    img4: "../assets/gallery/Otel 11 - Sahil4.webp",
    img5: "../assets/gallery/Otel 11 - Sahil5.webp",
    country: "Koh Samui, Tayland",
    puan: 4.7,
    title: "sahil",
    host: "Amanda ilə qonaqlayın",
    date1: "15 İyun",
    date2: "25 İyun",
     price: 120,
    night: "gecə"
  },
  {
    id: 12,
    img1: "../assets/gallery/Otel 12 - Lux1.webp",
    img2: "../assets/gallery/Otel 12 - Lux2.webp",
    img3: "../assets/gallery/Otel 12 - Lux3.webp",
    img4: "../assets/gallery/Otel 12 - Lux4.webp",
    img5: "../assets/gallery/Otel 12 - Lux5.webp",
    country: "Paris, Fransa",
    puan: 4.9,
    title: "lux",
    host: "Julien ilə qonaqlayın",
    date1: "10 İyul",
    date2: "20 İyul",
     price: 200,
    night: "gecə"
  },
  {
    id: 13,
    img1: "../assets/gallery/Otel 13 - Ev1.webp",
    img2: "../assets/gallery/Otel 13 - Ev2.webp",
    img3: "../assets/gallery/Otel 13 - Ev3.webp",
    img4: "../assets/gallery/Otel 13 - Ev4.webp",
    img5: "../assets/gallery/Otel 13 - Ev5.webp",
    country: "Bali, Endonezya",
    puan: 4.5,
    title: "ev",
    host: "Wayan ilə qonaqlayın",
    date1: "15 Avq",
    date2: "25 Avq",
     price: 80,
    night: "gecə"
  },
  {
    id: 14,
    img1: "../assets/gallery/Otel 14 - Hovus1.webp",
    img2: "../assets/gallery/Otel 14 - Hovus2.webp",
    img3: "../assets/gallery/Otel 14 - Hovus3.webp",
    img4: "../assets/gallery/Otel 14 - Hovus4.webp",
    img5: "../assets/gallery/Otel 14 - Hovus5.webp",
    country: "Santorini, Yunanistan",
    puan: 4.2,
    title: "hovus",
    host: "Nikos ilə qonaqlayın",
    date1: "5 Sen",
    date2: "15 Sen",
     price: 150,
    night: "gecə"
  },
  {
    id: 15,
    img1: "../assets/gallery/Otel 15 - Triplex1.webp",
    img2: "../assets/gallery/Otel 15 - Triplex2.webp",
    img3: "../assets/gallery/Otel 15 - Triplex3.webp",
    img4: "../assets/gallery/Otel 15 - Triplex4.webp",
    img5: "../assets/gallery/Otel 15 - Triplex5.webp",
    country: "Rio de Janeiro, Brezilya",
    puan: 4.7,
    title: "triplex",
    host: "Pedro ilə qonaqlayın",
    date1: "20 Sen",
    date2: "30 Sen",
     price: 180,
    night: "gecə"
  },
  {
    id: 16,
    img1: "../assets/gallery/Otel 16 - Tropic1.webp",
    img2: "../assets/gallery/Otel 16 - Tropic2.webp",
    img3: "../assets/gallery/Otel 16 - Tropic3.webp",
    img4: "../assets/gallery/Otel 16 - Tropic4.webp",
    img5: "../assets/gallery/Otel 16 - Tropic5.webp",
    country: "Phuket, Tayland",
    puan: 4.4,
    title: "tropic",
    host: "Saranya ilə qonaqlayın",
    date1: "10 Ekim",
    date2: "20 Ekim",
     price: 120,
    night: "gecə"
  },
  {
    id: 17,
    img1: "../assets/gallery/Otel 17 - Favori1.webp",
    img2: "../assets/gallery/Otel 17 - Favori2.webp",
    img3: "../assets/gallery/Otel 17 - Favori3.webp",
    img4: "../assets/gallery/Otel 17 - Favori4.webp",
    img5: "../assets/gallery/Otel 17 - Favori5.webp",
    country: "Los Angeles, ABD",
    puan: 4.8,
    title: "favori",
    host: "Emily ilə qonaqlayın",
    date1: "5 Noy",
    date2: "15 Noy",
     price: 160,
    night: "gecə"
  },
  {
    id: 18,
    img1: "../assets/gallery/Otel 18 - Sorf1.webp",
    img2: "../assets/gallery/Otel 18 - Sorf2.webp",
    img3: "../assets/gallery/Otel 18 - Sorf3.webp",
    img4: "../assets/gallery/Otel 18 - Sorf4.webp",
    img5: "../assets/gallery/Otel 18 - Sorf5.webp",
    country: "Gold Coast, Avustralya",
    puan: 4.5,
    title: "sorf",
    host: "Jack ilə qonaqlayın",
    date1: "10 Noy",
    date2: "20 Noy",
     price: 100,
    night: "gecə"
  },
  {
    id: 19,
    img1: "../assets/gallery/Otel 19 - Sahil1.webp",
    img2: "../assets/gallery/Otel 19 - Sahil2.webp",
    img3: "../assets/gallery/Otel 19 - Sahil3.webp",
    img4: "../assets/gallery/Otel 19 - Sahil4.webp",
    img5: "../assets/gallery/Otel 19 - Sahil5.webp",
    country: "Bodrum, Türkiye",
    puan: 4.6,
    title: "sahil",
    host: "Ahmet ilə qonaqlayın",
    date1: "15 Noy",
    date2: "25 Noy",
     price: 120,
    night: "gecə"
  },
  {
    id: 20,
    img1: "../assets/gallery/Otel 20 - Lux1.webp",
    img2: "../assets/gallery/Otel 20 - Lux2.webp",
    img3: "../assets/gallery/Otel 20 - Lux3.webp",
    img4: "../assets/gallery/Otel 20 - Lux4.webp",
    img5: "../assets/gallery/Otel 20 - Lux5.webp",
    country: "Barselona, İspanya",
    puan: 4.9,
    title: "lux",
    host: "Carlos ilə qonaqlayın",
    date1: "20 Noy",
    date2: "30 Noy",
     price: 180,
    night: "gecə"
  },
  {
    id: 21,
    img1: "../assets/gallery/Otel 21 - Ev1.webp",
    img2: "../assets/gallery/Otel 21 - Ev2.webp",
    img3: "../assets/gallery/Otel 21 - Ev3.webp",
    img4: "../assets/gallery/Otel 21 - Ev4.webp",
    img5: "../assets/gallery/Otel 21 - Ev5.webp",
    country: "Amsterdam, Hollanda",
    puan: 4.5,
    title: "ev",
    host: "Anna ilə qonaqlayın",
    date1: "5 Dek",
    date2: "15 Dek",
     price: 150,
    night: "gecə"
  },
  {
    id: 22,
    img1: "../assets/gallery/Otel 22 - Hovus1.webp",
    img2: "../assets/gallery/Otel 22 - Hovus2.webp",
    img3: "../assets/gallery/Otel 22 - Hovus3.webp",
    img4: "../assets/gallery/Otel 22 - Hovus4.webp",
    img5: "../assets/gallery/Otel 22 - Hovus5.webp",
    country: "Havana, Küba",
    puan: 4.2,
    title: "hovus",
    host: "Raul ilə qonaqlayın",
    date1: "10 Dek",
    date2: "20 Dek",
     price: 130,
    night: "gecə"
  },
  {
    id: 23,
    img1: "../assets/gallery/Otel 23 - Camp1.webp",
    img2: "../assets/gallery/Otel 23 - Camp2.webp",
    img3: "../assets/gallery/Otel 23 - Camp3.webp",
    img4: "../assets/gallery/Otel 23 - Camp4.webp",
    img5: "../assets/gallery/Otel 23 - Camp5.webp",
    country: "Vancouver, Kanada",
    puan: 4.6,
    title: "camp",
    host: "Olivia ilə qonaqlayın",
    date1: "15 Dek",
    date2: "25 Dek",
     price: 100,
    night: "gecə"
  },
  {
    id: 24,
    img1: "../assets/gallery/Otel 24 - Triplex1.webp",
    img2: "../assets/gallery/Otel 24 - Triplex2.webp",
    img3: "../assets/gallery/Otel 24 - Triplex3.webp",
    img4: "../assets/gallery/Otel 24 - Triplex4.webp",
    img5: "../assets/gallery/Otel 24 - Triplex5.webp",
    country: "Tokyo, Japonya",
    puan: 4.7,
    title: "triplex",
    host: "Yuki ilə qonaqlayın",
    date1: "20 Dek",
    date2: "30 Dek",
     price: 180,
    night: "gecə"
  },
  {
    id: 24,
    img1: "../assets/gallery/Otel 24 - Triplex1.webp",
    img2: "../assets/gallery/Otel 24 - Triplex2.webp",
    img3: "../assets/gallery/Otel 24 - Triplex3.webp",
    img4: "../assets/gallery/Otel 24 - Triplex4.webp",
    img5: "../assets/gallery/Otel 24 - Triplex5.webp",
    country: "Tokyo, Japonya",
    puan: 4.7,
    title: "triplex",
    host: "Yuki ilə qonaqlayın",
    date1: "20 Dek",
    date2: "30 Dek",
     price: 180,
    night: "gecə"
  },
  {
    id: 25,
    img1: "../assets/gallery/Otel 25 - Tropic1.webp",
    img2: "../assets/gallery/Otel 25 - Tropic2.webp",
    img3: "../assets/gallery/Otel 25 - Tropic3.webp",
    img4: "../assets/gallery/Otel 25 - Tropic4.webp",
    img5: "../assets/gallery/Otel 25 - Tropic5.webp",
    country: "Bali, Endonezya",
    puan: 4.4,
    title: "tropic",
    host: "Komang ilə qonaqlayın",
    date1: "25 Dek",
    date2: "5 Yan",
     price: 120,
    night: "gecə"
  },
  {
    id: 26,
    img1: "../assets/gallery/Otel 26 - Favori1.webp",
    img2: "../assets/gallery/Otel 26 - Favori2.webp",
    img3: "../assets/gallery/Otel 26 - Favori3.webp",
    img4: "../assets/gallery/Otel 26 - Favori4.webp",
    img5: "../assets/gallery/Otel 26 - Favori5.webp",
    country: "Lizbon, Portekiz",
    puan: 4.6,
    title: "favori",
    host: "Carlos ilə qonaqlayın",
    date1: "1 Yan",
    date2: "10 Yan",
     price: 150,
    night: "gecə"
  },
  {
    id: 27,
    img1: "../assets/gallery/Otel 27 - Sahil1.webp",
    img2: "../assets/gallery/Otel 27 - Sahil2.webp",
    img3: "../assets/gallery/Otel 27 - Sahil3.webp",
    img4: "../assets/gallery/Otel 27 - Sahil4.webp",
    img5: "../assets/gallery/Otel 27 - Sahil5.webp",
    country: "Barcelona, İspanya",
    puan: 4.8,
    title: "sahil",
    host: "Marta ilə qonaqlayın",
    date1: "5 Yan",
    date2: "15 Yan",
     price: 200,
    night: "gecə"
  },
  {
    id: 28,
    img1: "../assets/gallery/Otel 28 - Lux1.webp",
    img2: "../assets/gallery/Otel 28 - Lux2.webp",
    img3: "../assets/gallery/Otel 28 - Lux3.webp",
    img4: "../assets/gallery/Otel 28 - Lux4.webp",
    img5: "../assets/gallery/Otel 28 - Lux5.webp",
    country: "Paris, Fransa",
    puan: 4.9,
    title: "lux",
    host: "Sophie ilə qonaqlayın",
    date1: "10 Fev",
    date2: "20 Fev",
     price: 250,
    night: "gecə"
  },
  {
    id: 29,
    img1: "../assets/gallery/Otel 29 - Ev1.webp",
    img2: "../assets/gallery/Otel 29 - Ev2.webp",
    img3: "../assets/gallery/Otel 29 - Ev3.webp",
    img4: "../assets/gallery/Otel 29 - Ev4.webp",
    img5: "../assets/gallery/Otel 29 - Ev5.webp",
    country: "Santorini, Yunanistan",
    puan: 4.5,
    title: "ev",
    host: "Nikos ilə qonaqlayın",
    date1: "15 Fev",
    date2: "25 Fev",
     price: 180,
    night: "gecə"
  },
  {
    id: 30,
    img1: "../assets/gallery/Otel 30 - Hovus1.webp",
    img2: "../assets/gallery/Otel 30 - Hovus2.webp",
    img3: "../assets/gallery/Otel 30 - Hovus3.webp",
    img4: "../assets/gallery/Otel 30 - Hovus4.webp",
    img5: "../assets/gallery/Otel 30 - Hovus5.webp",
    country: "Rio de Janeiro, Brezilya",
    puan: 4.2,
    title: "hovus",
    host: "Roberto ilə qonaqlayın",
    date1: "20 Fev",
    date2: "1 Mar",
     price: 120,
    night: "gecə"
  },
  {
    id: 31,
    img1: "../assets/gallery/Otel 31 - Camp1.webp",
    img2: "../assets/gallery/Otel 31 - Camp2.webp",
    img3: "../assets/gallery/Otel 31 - Camp3.webp",
    img4: "../assets/gallery/Otel 31 - Camp4.webp",
    img5: "../assets/gallery/Otel 31 - Camp5.webp",
    country: "Vancouver, Kanada",
    puan: 4.6,
    title: "camp",
    host: "Emily ilə qonaqlayın",
    date1: "25 Fev",
    date2: "5 Mar",
     price: 100,
    night: "gecə"
  },
  {
    id: 32,
    img1: "../assets/gallery/Otel 32 - Tropic1.webp",
    img2: "../assets/gallery/Otel 32 - Tropic2.webp",
    img3: "../assets/gallery/Otel 32 - Tropic3.webp",
    img4: "../assets/gallery/Otel 32 - Tropic4.webp",
    img5: "../assets/gallery/Otel 32 - Tropic5.webp",
    country: "Phuket, Tayland",
    puan: 4.7,
    title: "tropic",
    host: "Sawadee ilə qonaqlayın",
    date1: "1 Mar",
    date2: "10 Mar",
     price: 180,
    night: "gecə"
  },
  {
    id: 33,
    img1: "../assets/gallery/Otel 33 - Favori1.webp",
    img2: "../assets/gallery/Otel 33 - Favori2.webp",
    img3: "../assets/gallery/Otel 33 - Favori3.webp",
    img4: "../assets/gallery/Otel 33 - Favori4.webp",
    img5: "../assets/gallery/Otel 33 - Favori5.webp",
    country: "Lizbon, Portekiz",
    puan: 4.8,
    title: "favori",
    host: "Antonio ilə qonaqlayın",
    date1: "5 Mar",
    date2: "15 Mar",
     price: 200,
    night: "gecə"
  },
  {
    id: 34,
    img1: "../assets/gallery/Otel 34 - Sahil1.webp",
    img2: "../assets/gallery/Otel 34 - Sahil2.webp",
    img3: "../assets/gallery/Otel 34 - Sahil3.webp",
    img4: "../assets/gallery/Otel 34 - Sahil4.webp",
    img5: "../assets/gallery/Otel 34 - Sahil5.webp",
    country: "Malibu, ABD",
    puan: 4.9,
    title: "sahil",
    host: "David ilə qonaqlayın",
    date1: "10 Mar",
    date2: "20 Mar",
     price: 350,
    night: "gecə"
  },
  {
    id: 35,
    img1: "../assets/gallery/Otel 35 - Lux1.webp",
    img2: "../assets/gallery/Otel 35 - Lux2.webp",
    img3: "../assets/gallery/Otel 35 - Lux3.webp",
    img4: "../assets/gallery/Otel 35 - Lux4.webp",
    img5: "../assets/gallery/Otel 35 - Lux5.webp",
    country: "Tokyo, Japonya",
    puan: 4.7,
    title: "lux",
    host: "Yuki ilə qonaqlayın",
    date1: "15 Mar",
    date2: "25 Mar",
     price: 300,
    night: "gecə"
  },
  {
    id: 36,
    img1: "../assets/gallery/Otel 36 - Ev1.webp",
    img2: "../assets/gallery/Otel 36 - Ev2.webp",
    img3: "../assets/gallery/Otel 36 - Ev3.webp",
    img4: "../assets/gallery/Otel 36 - Ev4.webp",
    img5: "../assets/gallery/Otel 36 - Ev5.webp",
    country: "Santorini, Yunanistan",
    puan: 4.5,
    title: "ev",
    host: "Maria ilə qonaqlayın",
    date1: "20 Mar",
    date2: "30 Mar",
     price: 250,
    night: "gecə"
  },
  {
    id: 37,
    img1: "../assets/gallery/Otel 37 - Hovus1.webp",
    img2: "../assets/gallery/Otel 37 - Hovus2.webp",
    img3: "../assets/gallery/Otel 37 - Hovus3.webp",
    img4: "../assets/gallery/Otel 37 - Hovus4.webp",
    img5: "../assets/gallery/Otel 37 - Hovus5.webp",
    country: "Bali, Endonezya",
    puan: 4.6,
    title: "hovus",
    host: "Wayan ilə qonaqlayın",
    date1: "25 Mar",
    date2: "5 Nis",
     price: 180,
    night: "gecə"
  },
  {
    id: 38,
    img1: "../assets/gallery/Otel 38 - Camp1.webp",
    img2: "../assets/gallery/Otel 38 - Camp2.webp",
    img3: "../assets/gallery/Otel 38 - Camp3.webp",
    img4: "../assets/gallery/Otel 38 - Camp4.webp",
    img5: "../assets/gallery/Otel 38 - Camp5.webp",
    country: "Cape Town, Güney Afrika",
    puan: 4.4,
    title: "camp",
    host: "Lungelo ilə qonaqlayın",
    date1: "30 Mar",
    date2: "10 Nis",
     price: 150,
    night: "gecə"
  },
  {
    id: 39,
    img1: "../assets/gallery/Otel 39 - Triplex1.webp",
    img2: "../assets/gallery/Otel 39 - Triplex2.webp",
    img3: "../assets/gallery/Otel 39 - Triplex3.webp",
    img4: "../assets/gallery/Otel 39 - Triplex4.webp",
    img5: "../assets/gallery/Otel 39 - Triplex5.webp",
    country: "Paris, Fransa",
    puan: 4.7,
    title: "triplex",
    host: "Julien ilə qonaqlayın",
    date1: "5 Nis",
    date2: "15 Nis",
    price: 280,
    night: "gecə"
  }
];

// Otellerin divlerinin yaradılması

hotels.forEach((hotel) => {
  const hotelHTML = `
    <div class="main_content_otel">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${hotel.img1}" class="d-block w-100" alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="${hotel.img2}" class="d-block w-100" alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="${hotel.img3}" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
          <img src="${hotel.img4}" class="d-block w-100" alt="Image 4">
        </div>
        <div class="carousel-item">
          <img src="${hotel.img5}" class="d-block w-100" alt="Image 5">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="main_content_otel_info">
      <div class="main_content_otel_info_contry">
        <div>${hotel.country}</div>

        <div class="main_content_otel_info_contry_starts">
          <span>&#9733</span>
          <span>${hotel.puan}</span>
        </div>
      </div>

      <div class="main_content_otel_info_detail">
        <div>2.313 km uzaqlıqda</div>
        <div>${hotel.date1} - ${hotel.date2}</div>
        <div><span class="main_content_otel_info_price">$${hotel.price}</span> ${hotel.night}</div>
      </div>
    </div>
  </div>
`;

container.innerHTML += hotelHTML;
});

// Nav id -lərinə görə otellərin filterlənməsi
navItems.forEach((item) => {
  item.addEventListener('click', function() {
    const selectedId = item.id;
    // const minimumRating = 4.5; 

    const filteredHotels = hotels.filter((hotel) => {
      return hotel.title === selectedId;
    });
    showFilteredHotels(filteredHotels); 
  });
});

// Filterlənmiş otelləri göstərmək üçün
const showFilteredHotels = (filteredHotels) => {

  container.innerHTML = '';

  filteredHotels.forEach((hotel) => {
    const hotelHTML = `
    <div class="main_content_otel">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${hotel.img1}" class="d-block w-100" alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="${hotel.img2}" class="d-block w-100" alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="${hotel.img3}" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
          <img src="${hotel.img4}" class="d-block w-100" alt="Image 4">
        </div>
        <div class="carousel-item">
          <img src="${hotel.img5}" class="d-block w-100" alt="Image 5">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="main_content_otel_info">
      <div class="main_content_otel_info_contry">
        <div>${hotel.country}</div>

        <div class="main_content_otel_info_contry_starts">
          <span>&#9733</span>
          <span>${hotel.puan}</span>
        </div>
      </div>

      <div class="main_content_otel_info_detail">
        <div>2.313 km uzaqlıqda</div>
        <div>${hotel.date1} - ${hotel.date2}</div>
        <div><span class="main_content_otel_info_price">$${hotel.price}</span> ${hotel.night}</div>
      </div>
    </div>
  </div>
`;

    container.innerHTML += hotelHTML;
  });
};

// const filterCarousel = new bootstrap.Carousel(document.getElementById('filterCarousel'), {
//   interval: false
// });


// Check-ə görə qiymətlərin hesablanması
let isClicked = false;

switchButton.addEventListener('click', function() {
  switchButton.classList.toggle('active');
  buttonContent.classList.toggle('active');

if (isClicked) {
  hotels.forEach((hotel) => {
    hotel.price = (hotel.price / 1.38).toFixed(2);
  });
} else {
  hotels.forEach((hotel) => {
    hotel.price = (hotel.price * 1.38).toFixed(2);
  });
}

    updateHotelPrices();

    isClicked = !isClicked;
});

function updateHotelPrices() {
  const hotelPriceElements = document.querySelectorAll('.main_content_otel_info_price');

  hotelPriceElements.forEach((element, index) => {
    element.textContent = '$' + hotels[index].price;
  });
}

       
  
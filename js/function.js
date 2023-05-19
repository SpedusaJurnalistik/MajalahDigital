const swiper = new Swiper(".mySwiper", {
 
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  keyboard: true,
  cssMode: false,
  initialSlide: 1,
  speed: 1500,
  longSwipesMs: 5000,
  spaceBetween: -10,
  breakpoints: {
    800: {
      spaceBetween: 10,
    },
  },
  coverflowEffect: {
    rotate: 120,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
    lazyPreloadPrevNext: 100,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$('#pembimbing').hide()
$("#konten").hide();


function buLisShow(){
  $('#pembimbing').show()
  $('#profilbulis').show()
  $('#profilzein').hide()
  $('#profilpakdidik').hide()
  $("body").addClass('overflow-hidden');
}

function pakZeinShow(){
  $('#pembimbing').show()
  $('#profilbulis').hide()
  $('#profilzein').show()
  $('#profilpakdidik').hide()
  $("body").addClass('overflow-hidden');
}

function pakDidikShow(){
  $('#pembimbing').show()
  $('#profilbulis').hide()
  $('#profilzein').hide()
  $('#profilpakdidik').show()
  $("body").addClass('overflow-hidden');
}

function pembimbingHide(){
  $('#pembimbing').hide()
  $("body").removeClass('overflow-hidden');
}




let book = this.document.getElementById("flipbook");
var html = document.documentElement;
let glass = document.getElementById("glass");
let showDev = document.getElementById("showDev");
let hideDev = document.getElementById("hideDev");
const inputGambar = document.getElementById("input-gambar");
const ubahGambar = document.getElementById("ubah-gambar");
const bgImage = document.getElementById("konten");
dev = document.getElementById("devMode");
function blur2() {
  let atur = prompt(
    "Penulisan= bg-(colcor) / (tingkatan blur [10-100] ); contoh: bg-black/40"
  );
  glass.classList.remove("bg-white/30");
  glass.classList.add(atur);
}

function showDev1() {
  dev.classList.remove("hidden");
  showDev.classList.add("hidden");
  hideDev.classList.remove("hidden");
}

function hideDev1() {
  dev.classList.add("hidden");
  hideDev.classList.add("hidden");
  showDev.classList.remove("hidden");
}



$(document).ready(function () {
  $("#contact").click(function () {
    $("#contentContact").show();
  });
  $("#closeContact").click(function () {
    $("#contentContact").hide();
  });
  
});

function loadWeb(){
  $("#loader").addClass('animate__animated animate__fadeOut');
  setTimeout(function(){
    $("#loader").hide();
    $("#konten").show();
  },1000)
  $("html").addClass('scroll-smooth')
  
}
const contactForm = document.getElementById("formcontent");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);
  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  }).then(() => {
    location.reload()
  });
});

AOS.init();
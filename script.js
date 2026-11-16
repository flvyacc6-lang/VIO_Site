const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  mobileMenu.inert = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
});

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(item => item.classList.remove("active"));
    tabContents.forEach(item => item.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const modal = document.getElementById("my-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.querySelector(".close-modal");
const wrapper = document.querySelector(".wrapper");
const backToTop = document.querySelector(".back-to-top");

let previousOverflow = "";

openBtn.addEventListener("click", () => {
  previousOverflow = document.body.style.overflow;
  modal.classList.add("open");
  wrapper.inert = true;
  backToTop.inert = true;
  document.body.style.overflow = "hidden";
  document.getElementById("callback-name").focus();
});

function closeModal() {
  modal.classList.remove("open");
  wrapper.inert = false;
  backToTop.inert = false;
  document.body.style.overflow = previousOverflow;
  openBtn.focus();
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

document.getElementById("callback-form").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("form-status").textContent =
    "Це навчальна форма. Дані не надсилаються.";
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
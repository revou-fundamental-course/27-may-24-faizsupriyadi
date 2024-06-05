document.addEventListener("DOMContentLoaded", function () {
  // Prompt untuk nama viewer saat website ditest
  const viewerNameSpan = document.getElementById("viewer-name");
  const viewerName = prompt("Masukan nama anda:");

  if (viewerName) {
    viewerNameSpan.textContent = viewerName;
  }

  // Form handling dan menampilkan hasil input form
  const form = document.getElementById("userForm");
  const outputName = document.getElementById("outputName");
  const outputDob = document.getElementById("outputDob");
  const outputGender = document.getElementById("outputGender");
  const outputMessage = document.getElementById("outputMessage");
  const currentTime = document.getElementById("currentTime");

  // Fungsi untuk memperbarui waktu saat ini
  function updateCurrentTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedTime = now.toLocaleDateString("id-ID", options);
    currentTime.textContent = `Waktu saat ini: ${formattedTime}`;
  }

  // Event listener untuk submit form
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = new Date(document.getElementById("dob").value);
    const formattedDob = dob.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const gender =
      document.querySelector('input[name="gender"]:checked')?.value || "";
    const message = document.getElementById("message").value;

    // Update hasil input form
    viewerNameSpan.textContent = name;
    outputName.textContent = name;
    outputDob.textContent = formattedDob;
    outputGender.textContent = gender;
    outputMessage.textContent = message;

    updateCurrentTime();
  });
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

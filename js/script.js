// ini script js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const viewerName = document.getElementById("viewer-name");
  const outputName = document.getElementById("outputName");
  const outputDob = document.getElementById("outputDob");
  const outputGender = document.getElementById("outputGender");
  const outputMessage = document.getElementById("outputMessage");
  const currentTime = document.getElementById("currentTime");

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
    currentTime.textContent = `Current Time: ${formattedTime}`;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender =
      document.querySelector('input[name="gender"]:checked')?.value || "";
    const message = document.getElementById("message").value;

    viewerName.textContent = name;
    outputName.textContent = name;
    outputDob.textContent = dob;
    outputGender.textContent = gender;
    outputMessage.textContent = message;

    updateCurrentTime();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

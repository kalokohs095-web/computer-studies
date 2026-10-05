// THEME (SAVE)
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};

// SEARCH (WORKING)
document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});



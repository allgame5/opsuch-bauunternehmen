
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Danke für deinen Auftrag! Wir melden uns bald bei dir.");
    form.reset();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

function handleContact(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  const status = document.querySelector("#form-status");

  if (!name || !email || !message) return false;

  const subject = encodeURIComponent(`Message from ${name} — Yankho & Friends`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

  status.textContent = "Your email app should open now. Replace the email address in contact.html with your real address.";
  return false;
}

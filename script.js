function scrollToForm() {
document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("regForm").addEventListener("submit", function(e){
e.preventDefault();

const loader = document.getElementById("loader");
loader.classList.remove("hidden");

setTimeout(() => {
window.location.href = "thankyou.html";
}, 2000);
});


if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("service-worker.js");
}


// Install button logic
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
e.preventDefault();
deferredPrompt = e;
installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", () => {
if (deferredPrompt) {
deferredPrompt.prompt();
deferredPrompt.userChoice.then(() => {
deferredPrompt = null;
});
}
});

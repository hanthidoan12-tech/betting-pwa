function scrollToForm() {
document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("regForm").addEventListener("submit", function(e){
e.preventDefault();
window.location.href = "thankyou.html";
});

if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("service-worker.js");
}

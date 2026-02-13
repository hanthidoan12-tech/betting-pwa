self.addEventListener("install", function(event) {
event.waitUntil(
caches.open("betwin-cache").then(function(cache) {
return cache.addAll([
"/",
"/index.html",
"/thankyou.html",
"/style.css",
"/script.js",
"/manifest.json"
]);
})
);
});

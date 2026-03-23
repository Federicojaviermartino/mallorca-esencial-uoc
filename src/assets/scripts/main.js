/**
 * Mallorca Esencial - Valldemossa, Soller y Palma
 * Main JavaScript file
 */

import L from "leaflet";

// --------------------------------------------------
// Mobile navigation toggle
// --------------------------------------------------

var navToggle = document.getElementById("nav-toggle");
var navList = document.getElementById("nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", function () {
    navList.classList.toggle("nav__list--open");
    var isOpen = navList.classList.contains("nav__list--open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  var navLinks = navList.querySelectorAll(".nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navList.classList.remove("nav__list--open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --------------------------------------------------
// Leaflet map initialization
// --------------------------------------------------

var mapContainer = document.getElementById("leaflet-map");

if (mapContainer) {
  var valldemossa = [39.7106, 2.6231];
  var soller = [39.7670, 2.7145];
  var portDeSoller = [39.7950, 2.6920];
  var palmaCathedral = [39.5674, 2.6502];
  var castellBellver = [39.5637, 2.6197];

  var map = L.map("leaflet-map", {
    scrollWheelZoom: false
  }).setView([39.6700, 2.6700], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    maxZoom: 18
  }).addTo(map);

  var markerIcon = L.divIcon({
    html: "<i class='fas fa-map-marker-alt' style='font-size: 28px; color: #1a3a5c;'></i>",
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
    className: "custom-marker"
  });

  L.marker(valldemossa, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Valldemossa</strong><br>Real Cartuja y calles empedradas");

  L.marker(soller, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Soller</strong><br>Valle de los naranjos y tranvia historico");

  L.marker(portDeSoller, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Port de Soller</strong><br>Puerto pesquero y final del tranvia");

  L.marker(palmaCathedral, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Catedral de La Seu</strong><br>Catedral gotica frente al mar");

  L.marker(castellBellver, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Castell de Bellver</strong><br>Castillo gotico circular con vistas a la bahia");
}

// --------------------------------------------------
// Smooth scroll for navigation links
// --------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

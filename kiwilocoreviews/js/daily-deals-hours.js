// setup variables
const now = new Date();
const hours = now.getHours();
const day = now.getDay();

// setup array to match the day to
const deals = ["Sun Deal", "Mon Deal", "Tue Deal", "Wed Deal", "Thu Deal", "Fri Deal", "Sat Deal"];
document.getElementById("daily-deal").textContent = deals[day];

// Updated store open logic: Mon–Sat, Noon–Midnight
const isOpen = day >= 1 && day <= 6 && hours >= 12 && hours < 24;

const openString = "We're Open!";
const closedString = "Sorry, We're Closed!";

const storeStatusEl = document.getElementById("store-status");
storeStatusEl.innerHTML = isOpen ? openString : closedString;
storeStatusEl.className = isOpen ? "open-status" : "closed-status";

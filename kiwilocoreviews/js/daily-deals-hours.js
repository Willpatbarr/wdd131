// setup variables
const now = new Date();
const hours = now.getHours();
const day = now.getDay();

// setup array to match the day to
// const deals = ["Sun Deal", "Mon Deal", "Tue Deal", "Wed Deal", "Thu Deal", "Fri Deal", "Sat Deal"];
// document.getElementById("daily-deal").textContent = deals[day];

// Updated store open logic: Mon–Sat, Noon–Midnight
const isOpen = day >= 1 && day <= 6 && hours >= 12 && hours < 24;

const openString = "We're Open!";
const closedString = "Sorry, We're Closed!";

const storeStatusEl = document.getElementById("store-status");
storeStatusEl.innerHTML = isOpen ? openString : closedString;
storeStatusEl.className = isOpen ? "open-status" : "closed-status";

function getDealTitle(day) {
    const titles = [
        "Daily Deals: ",
        "Family Night",
        "BOGO",
        "Workout Wednesday",
        "Thirsty Thursday",
        "Daily Deals: ",
        "Daily Deals: "
    ];
    return titles[day];
}

function getDealDescription(day) {
    const descriptions = [
        "Check out our daily deals below",
        "Family Night - 25% off",
        "Buy One Get One Free - 6pm–8pm",
        "Workout Wednesday - do our daily workout to save money on your yogurt",
        "Thirsty Thursday - $1 off all drinks",
        "Check out our daily deals below",
        "Check out our daily deals below"
    ];
    return descriptions[day];
}

const dealTitle = getDealTitle(day);
const dealDesc = getDealDescription(day);

// You could update the DOM like this:
document.getElementById("deal-title").innerHTML = `<strong>${dealTitle}:</strong>`;

document.getElementById("deal-description").innerHTML = `<p>${dealDesc}:<p>`
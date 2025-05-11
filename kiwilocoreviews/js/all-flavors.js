// call the flavor card builder on all of the flavors in the flavors list where
//   isActive is true
import allFlavors from './YogurtFlavor.js';

document.addEventListener("DOMContentLoaded", () => {
    const featuredFlavorsContainer = document.getElementById("all-flavors");

    allFlavors.forEach(flavor => {
        if (flavor.isActive) {
            featuredFlavorsContainer.appendChild(flavor.createFlavorCard());
        }
    });
});

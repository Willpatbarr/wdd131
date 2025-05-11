// call the flavor card builder on all of the flavors where
//   isActive is true and isFeatured is true

import allFlavors from './YogurtFlavor.js';

document.addEventListener("DOMContentLoaded", () => {
    const featuredFlavorsContainer = document.getElementById("featured-flavors");

    allFlavors.forEach(flavor => {
        if (flavor.isActive && flavor.isFeatured) {
            featuredFlavorsContainer.appendChild(flavor.createFlavorCard());
        }
    });
});

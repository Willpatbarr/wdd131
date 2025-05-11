// flavor class
class YogurtFlavor {

    constructor(flavorName, isActive, isFeatured, fPairing1, fPairing2, tPairing1, tPairing2, image) {
        this.flavorName = flavorName;
        this.isActive = isActive;
        this.isFeatured = isFeatured;
        this.fPairing1 = fPairing1;
        this.fPairing2 = fPairing2;
        this.tPairing1 = tPairing1;
        this.tPairing2 = tPairing2;
        this.image = image; // path to the flavor's image
    }

    // method to build a flavor on the webpage using the DOM
    createFlavorCard() {
        const card = document.createElement("div");
        card.className = "flavor-card";

        card.innerHTML = `
            <img src="${this.image}" alt="${this.flavorName}">
            <h3>${this.flavorName}</h3>
            <p><strong>Pair with:</strong> ${this.fPairing1}, ${this.fPairing2}</p>
            <p><strong>Suggested toppings:</strong> ${this.tPairing1}, ${this.tPairing2}</p>
        `;

        return card;
    }
}

// initialize every flavor and create a list of the them all
const allFlavors = [
    new YogurtFlavor("Alpine Vanilla", true, true, "Chocolate", "Tropical Banana", "Butterfinger", "Strawberries", "images/alpine-vanilla.jpg"),
    new YogurtFlavor("NSA Chocolate", true, false, "Vanilla", "Horchata", "Reese’s", "Brownie Bites", "images/NSA-chocolate.jpg"),
    new YogurtFlavor("Pomegranate Raspberry", true, false, "Pineapple Dole", "Tiger’s Blood", "Mango", "Strawberries", "images/pomegranate-raspberry.jpg"),
    new YogurtFlavor("Samoa Cookie", true, false, "Chocolate Strawberry", "Birthday Cake", "Heath", "Butterfinger", "images/LBB_samoa.jpg"),
    new YogurtFlavor("Horchata", true, false, "Vanilla", "Chocolate", "Cinnamon Toast Crunch", "Reese’s", "images/horchata.jpeg"),
    new YogurtFlavor("Tiger’s Blood", true, true, "Cotton Candy", "Tropical Banana", "Coconut Shreds", "Strawberries", "images/tigers-blood.jpeg"),
    new YogurtFlavor("Cotton Candy", true, false, "Pineapple Dole Whip", "Birthday Cake", "Sprinkles", "Boba", "images/cotton-candy.jpeg"),
    new YogurtFlavor("Chocolate Strawberry", true, false, "Pomegranate Raspberry", "Birthday Cake", "Strawberries", "Waffle Cone", "images/chocolate-strawberry.jpeg"),
    new YogurtFlavor("Tropical Banana", true, false, "Pineapple Dole Whip", "Pomegranate Raspberry", "Coconut Shreds", "Boba", "images/tropical-banana.jpeg"),
    new YogurtFlavor("Pineapple Dole Whip", true, true, "Tropical Banana", "Tiger’s Blood", "Mango", "Kiwi", "images/pineapple-dole-whip.jpeg"),
    new YogurtFlavor("Chocolate Cake Batter", true, false, "Horchata", "Samoa Cookie", "Reese’s", "Cookie Dough", "images/chocolate-cake-batter.jpeg"),
    new YogurtFlavor("Birthday Cake", true, false, "Alpine Vanilla", "NSA Chocolate", "Sprinkles", "PB M&Ms", "images/birthday-cake.jpeg"),
];

export default allFlavors;
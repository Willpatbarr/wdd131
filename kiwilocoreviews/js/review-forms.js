// JS for the review forms
document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("form-container");

    document.getElementById('froyo-review-btn').addEventListener('click', showFroyoForm);
    document.getElementById('service-review-btn').addEventListener('click', showServiceForm);
    document.getElementById('suggestion-btn').addEventListener('click', showSuggestionForm);

    function clearForm() {
        formContainer.innerHTML = '';
    }

    function thankTheReviewer() {
        formContainer.innerHTML = `
        <h3>Thankyou! Your feedback has been submitted!</h3>`
    }

    function showFroyoForm() {
        clearForm();
        formContainer.innerHTML = `
            <form id="froyo-review">
                <label>How many flavors did you get?</label>
                <input type="number" id="num-flavors" min="1" required>
                <div id="flavor-details"></div>

                <label>How many toppings did you get?</label>
                <input type="number" id="num-toppings" min="0" required>
                <div id="topping-details"></div>

                <button type="submit">Submit Review</button>
            </form>
        `;

        document.getElementById('num-flavors').addEventListener('change', generateFlavorFields);
        document.getElementById('num-toppings').addEventListener('change', generateToppingFields);
    }

    function generateFlavorFields() {
        const numFlavors = document.getElementById('num-flavors').value;
        const flavorDetails = document.getElementById('flavor-details');
        flavorDetails.innerHTML = '';

        for (let i = 1; i <= numFlavors; i++) {
            flavorDetails.innerHTML += `
                <label>Flavor ${i}</label>
                <select required>
                    <option value="">Select Flavor</option>
                    <option>Alpine Vanilla</option>
                    <option>NSA Chocolate</option>
                    <option>Pomegranate Raspberry</option>
                    <option>Samoa Cookie</option>
                    <option>Horchata</option>
                    <option>Tiger’s Blood</option>
                    <option>Cotton Candy</option>
                    <option>Chocolate Strawberry</option>
                    <option>Tropical Banana</option>
                    <option>Pineapple Dole Whip</option>
                    <option>Chocolate Cake Batter</option>
                    <option>Birthday Cake</option>
                </select>
                <label>Rate this flavor (1-10)</label>
                <input type="number" min="1" max="10" required>
            `;
        }
    }

    function generateToppingFields() {
        const numToppings = document.getElementById('num-toppings').value;
        const toppingDetails = document.getElementById('topping-details');
        toppingDetails.innerHTML = '';

        for (let i = 1; i <= numToppings; i++) {
            toppingDetails.innerHTML += `
                <label>Topping ${i}</label>
                <input type="text" required>
                <label>Rate this topping (1-10)</label>
                <input type="number" min="1" max="10" required>
            `;
        }
    }

    function showServiceForm() {
        clearForm();
        formContainer.innerHTML = `
            <form id="service-review">
                <label>What time did you visit?</label>
                <input type="time" required>

                <label>Employee friendliness (1-10)</label>
                <input type="number" min="1" max="10" required>

                <label>Employee helpfulness (1-10)</label>
                <input type="number" min="1" max="10" required>

                <label>Likelihood to return (1-10)</label>
                <input type="number" min="1" max="10" required>

                <label>Additional comments:</label>
                <textarea></textarea>

                <button type="submit">Submit Review</button>
            </form>
        `;
    }

    function showSuggestionForm() {
        clearForm();
        formContainer.innerHTML = `
            <form id="suggestion-form">
                <label>Suggest a new flavor:</label>
                <input type="text">

                <label>Suggest a new topping:</label>
                <input type="text">

                <button type="submit">Submit Suggestion</button>
            </form>
        `;
    }

    document.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from reloading
    
        // Clear the form content and thank the reviewer
        thankTheReviewer();
    });
    
});


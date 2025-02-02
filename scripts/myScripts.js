document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // obtain  ingredients and split by commas
    const ingredients = document.getElementById('ingredients').value.split(',').map(ingredient => ingredient.trim());

    // obtain directions and split by new line
    const directions = document.getElementById('directions').value.split('\n').map(step => step.trim());

    // ensure ingredients and directions are inputted
    if (ingredients.length > 0 && directions.length > 0) {
        // Display the ingredients list
        const ingredientsList = document.getElementById('ingredientOutput');
        ingredientsList.innerHTML = ''; // Clear previous list
        ingredients.forEach(ingredient => {
            if (ingredient) {  // Only add non-empty ingredients
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            }
        });

        // Display the directions list
        const directionsList = document.getElementById('directionOutput');
        directionsList.innerHTML = ''; // Clear previous list
        directions.forEach(step => {
            if (step) {  // Only add non-empty steps
                const li = document.createElement('li');
                li.textContent = step;
                directionsList.appendChild(li);
            }
        });

        // Show the recipe output section
        document.getElementById('recipeOutput').style.display = 'block';
    } else {
        alert("Error: Please enter both ingredients and directions in order to generate recipe!");
    }
});

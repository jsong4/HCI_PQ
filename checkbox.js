document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox-option");
    const nextButton = document.getElementById("next-btn");

    // Retrieve stored data or initialize it
    let usersList = JSON.parse(localStorage.getItem("usersList")) || { "user1": {} };
    // let selectedPrompts = usersList.user1.selectedPrompts || [];

    // Limit the number of checkboxes that can be selected to 3
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            if (checkedCount > 3) {
                alert("You can only select up to 3 options.");
                checkbox.checked = false;  // Uncheck the last one if more than 3 are selected
            }
        });
    });

    // Event listener for the "Next" button
    nextButton.addEventListener("click", () => {
        const selectedOptions = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextSibling.textContent.trim()); // Collect the label text
        console.log(selectedOptions)

        if (selectedOptions.length > 0) { // might not be necessary
            // Store the selected options in localStorage
            usersList.user1.checkbox = selectedOptions;

            // Save the updated data to localStorage
            localStorage.setItem("usersList", JSON.stringify(usersList));

        } else {
            alert("Please select at least one option.");
        }
    });
});
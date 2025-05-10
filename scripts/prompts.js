// List of all prompts
const prompts = [
    "The last chapter of my life story better include...",
    "In a parallel universe, I'm definitely...",
    "A letter to future me would definitely include...",
    "One rule of society I'd totally rewrite...",
    "Three dinner guests, unlimited wine, and chaos ensues...",
    "The soundtrack of my life would definitely include...",
    "If my personality were a cocktail, it would be called...",
    "The title of my autobiography would be...",
    "If I could have one superpower, it would be...",
    "If my life were a meme right now, it would be..."
];

const currentUser = localStorage.getItem("currentUser")
console.log(currentUser)

document.addEventListener("DOMContentLoaded", () => {
    // localStorage.removeItem("usersList");

    const dropdown = document.getElementById("select-prompt");
    const textEntry = document.getElementById("response");
    const nextButton = document.getElementById('next-btn');

    // Placeholder option to prompt user selection
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a written prompt";
    placeholder.disabled = true;
    placeholder.selected = true;
    dropdown.appendChild(placeholder);

    // Retrieve stored data or initialize it
    let usersList = JSON.parse(localStorage.getItem("usersList")) || { currentUser: {} };
    let selectedPrompts = usersList[currentUser].selectedPrompts || [];
    console.log(selectedPrompts)

    console.log(usersList)

    // Filter out already selected prompts
    const filteredPrompts = prompts.filter(prompt => !selectedPrompts.includes(prompt));

    // Populate the dropdown with filtered prompts
    filteredPrompts.forEach(prompt => {
        const option = document.createElement("option");
        option.value = prompt;
        option.textContent = prompt;
        dropdown.appendChild(option);
    });

    // Event listener for the Next button
    nextButton.addEventListener("click", () => {
        const selectedOption = dropdown.value;
        const textValue = textEntry.value;
        console.log(selectedOption, textValue)

        if (selectedOption && textValue) {
            // Update the selected prompts array
            if (!selectedPrompts.includes(selectedOption)) {
                selectedPrompts.push(selectedOption);
                usersList[currentUser].selectedPrompts = selectedPrompts;
            }

            // Update the user data structure
            const promptNumber = `prompt${selectedPrompts.length}`;
            usersList[currentUser][promptNumber] = [selectedOption, textValue];

            // Store updated data
            localStorage.setItem("usersList", JSON.stringify(usersList));
            if (selectedPrompts.length < 3){
                window.location.href = `newuser_prompt${selectedPrompts.length+1}.html`
            } else {
                window.location.href = `values.html`
            }
        } else {
            alert("Please select a prompt and enter an answer.");
        }
    });
});
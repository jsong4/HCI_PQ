document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("newuser_prompt1.html")) {
        localStorage.removeItem("userData");
    }
    const dropdown = document.getElementById("choices");
    const textEntry = document.getElementById("answer");
    const nextButton = document.querySelector('.next-button');

    // Placeholder option to prompt user selection
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a written prompt";
    placeholder.disabled = true;
    placeholder.selected = true;
    dropdown.appendChild(placeholder);

    // List of all prompts
    const prompts = [
        "The last chapter of my life story better include...",
        "In a parallel universe, I'm definitely...",
        "A letter to future me would definitely include...",
        "One rule of society I'd totally rewrite...",
        "Three dinner guests, unlimited wine, and chaos ensues...",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10"
    ];

    // Retrieve stored data or initialize it
    let userData = JSON.parse(localStorage.getItem("userData")) || { "user1": {} };
    let selectedPrompts = userData.user1.selectedPrompts || [];

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

        if (selectedOption && textValue) {
            // Update the user data structure
            const promptNumber = `prompt${Object.keys(userData.user1).length + 1}`;
            userData.user1[promptNumber] = [selectedOption, textValue];

            // Update the selected prompts array
            if (!selectedPrompts.includes(selectedOption)) {
                selectedPrompts.push(selectedOption);
                userData.user1.selectedPrompts = selectedPrompts;
            }

            // Store updated data
            localStorage.setItem("userData", JSON.stringify(userData));

            // Go to the next page (can be the same page if continuing the survey)
            if (window.location.pathname.includes("newuser_prompt1.html")) {
                window.location.href = "newuser_prompt2.html";
            }else if (window.location.pathname.includes("newuser_prompt2.html")) {
                window.location.href = "newuser_prompt3.html";
            }else {
                window.location.href = "newuser_checkbox.html";
            }
             // Redirect to the next page
        } else {
            alert("Please select a prompt and enter an answer.");
        }
    });
});

function checkWordLimit() {
    const textarea = document.getElementById("answer");
    const words = textarea.value.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    if (wordCount > 150) {
        alert("Word limit exceeded! Please limit your answer to 150 words.");
        textarea.value = words.slice(0, 150).join(" ");
    }
}

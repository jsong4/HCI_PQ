document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("choices");
    const previousPrompt1 = localStorage.getItem("selectedPrompt1");
    const previousPrompt2 = localStorage.getItem("selectedPrompt2");

    // Placeholder option to prompt user selection
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a written prompt";
    placeholder.disabled = true;
    placeholder.selected = true;
    dropdown.appendChild(placeholder);
    
    // List of prompts
    const prompts = [
        "The last chapter of my life story better include...",
        "In a parallel universe, I'm definitely...",
        "A letter to future me would definitely include...",
        "One rule of society I'd totally rewrite...",
        "Thre dinner guests, unlimited wine, and chaos ensues...",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10"
    ];

    const filteredPrompts1 = prompts.filter(prompt => prompt !== previousPrompt1);
    const filteredPrompts2 = filteredPrompts1.filter(prompt => prompt !== previousPrompt2);

    // Populate the dropdown with prompts
    filteredPrompts2.forEach(prompt => {
        const option = document.createElement("option");
        option.value = prompt;
        option.textContent = prompt;
        dropdown.appendChild(option);
    });

    // Save the selected prompt and answer to local storage
    document.querySelector('.next-button').addEventListener('click', () => {
        const selectedOption = dropdown.value;
        const textValue = document.getElementById("answer").value;

        if (selectedOption && textValue) {
            localStorage.setItem("selectedPrompt3", selectedOption);
            localStorage.setItem("userAnswer3", textValue);
            window.location.href = "newuser_checkbox.html"; // Redirect to the next page
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

question_1 = []
question_2 = []
question_3 = []

/* store prompt & response 1 */
function store_responses_1() {
    selectedPrompt = document.getElementById("select-prompt-1");
    selectedResponse = document.getElementById("response-1");
    const prompt = selectedPrompt.value;
    localStorage.setItem("prompt_1", prompt);
    const response = selectedResponse.value;
    localStorage.setItem("response-1", response);
    question_1 = [localStorage.getItem("prompt_1"), localStorage.getItem("response-1")]
}

/* store prompt & response 2 */
function store_responses_2() {
    selectedPrompt = document.getElementById("select-prompt-2");
    selectedResponse = document.getElementById("response-2");
    const prompt = selectedPrompt.value;
    localStorage.setItem("prompt_2", prompt);
    const response = selectedResponse.value;
    localStorage.setItem("response-2", response);
    question_2 = [localStorage.getItem("prompt_2"), localStorage.getItem("response-2")]
}

/* store prompt & response 3 */
function store_responses_3() {
    selectedPrompt = document.getElementById("select-prompt-3");
    selectedResponse = document.getElementById("response-3");
    const prompt = selectedPrompt.value;
    localStorage.setItem("prompt_3", prompt);
    const response = selectedResponse.value;
    localStorage.setItem("response-3", response);
    question_3 = [localStorage.getItem("prompt_3"), localStorage.getItem("response-3")]
}


/* remove first prompt from pages */
function removeFirst() {
    const prompt_1 = localStorage.getItem(prompt_1)
    document.getElementById("select-prompt-2").options.remove(prompt_1);
    document.getElementById("select-prompt-3").options.remove(prompt_1);
}

/* remove second prompt from last page */
function removeSecond() {
    const prompt_2 = localStorage.getItem(prompt_2)
    document.getElementById("select-prompt-3").options.remove(prompt_2);
}

usersList = {
    user_1 : {
        prompt1: question_1,
        prompt2: question_2,
        prompt3: question_3
    }
}
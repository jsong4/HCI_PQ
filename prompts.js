/* save prompt 1 */
prompt_1 = document.getElementById("select-prompt-1").value;
sessionStorage.setItem("prompt_1", prompt_1);

/* save response 1 */
response_1 = document.getElementById("response-1").value;
sessionStorage.setItem("response_1", response_1);

/* remove prompt 1 from questions */
document.getElementById("select-prompt-2").options.remove(prompt_1);
document.getElementById("select-prompt-3").options.remove(prompt_1);

/* save prompt 2 */
prompt_2 = document.getElementById("select-prompt-2").value;
sessionStorage.setItem("prompt_2", prompt_2);

/* save response 2 */
response_2 = document.getElementById("response-2").value;
sessionStorage.setItem("response_2", response_2);

/* remove prompt 2 from questions */
document.getElementById("select-prompt-3").options.remove(prompt_2);

/* save prompt 3 */
prompt_3 = document.getElementById("select-prompt-3").value;
sessionStorage.setItem("prompt_3", prompt_3);

/* save response 3 */
response_3 = document.getElementById("response-3").value;
sessionStorage.setItem("response_3", response_3);

usersList = {
    user_1 : {
        prompt1: [prompt_1, response_1],
        prompt2: [prompt_2, response_2],
        prompt3: [prompt_3, response_3]
    }
}
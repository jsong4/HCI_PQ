/* =============================
 * Pre-set the current user generated at the start of the questionnaire to
 * store their responses in localStorage.
 */
const currentUser = localStorage.getItem("currentUser")

/* =============================
 * Update the current users personal values (preferences) based on what they
 * select from each dropdown and save them as individual keys into under their
 * username in localStorage.
 */
function updateUser() {
    //grab current user
    let usersList = JSON.parse(localStorage.getItem("usersList")) || { currentUser: {} };
    const currentUser = localStorage.getItem("currentUser")

    //grab dropdown values
    const activity = document.getElementById("activity-select");
    const selectedActivity = activity.value;

    const politics = document.getElementById("politics-select");
    const selectedPolitics = politics.value;

    const religion = document.getElementById("religion-select");
    const selectedReligion = religion.value;

    const alcohol = document.getElementById("alcohol-select");
    const selectedAlcohol = alcohol.value;

    const tobacco = document.getElementById("tobacco-select");
    const selectedTobacco = tobacco.value;

    const cannabis = document.getElementById("cannabis-select");
    const selectedCannabis = cannabis.value;

    userInfo = usersList[currentUser];

    //update current user
    userInfo["activity"] = selectedActivity;
    userInfo["politics"] = selectedPolitics;
    userInfo["religion"] = selectedReligion;
    userInfo["alcohol"] = selectedAlcohol;
    userInfo["tobacco"] = selectedTobacco;
    userInfo["cannabis"] = selectedCannabis;

    // Store updated data
    localStorage.setItem("usersList", JSON.stringify(usersList));

    localStorage.setItem("test", "test");
    window.location.href = "newuser_checkbox.html"
}


document.addEventListener("DOMContentLoaded", () => {
    nextButton.addEventListener("click", () => {
        updateUser()
        window.location.href = "newuser_checkbox.html"
    })
})
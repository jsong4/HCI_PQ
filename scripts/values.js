const currentUser = localStorage.getItem("currentUser")

function updateUser() {
    console.log("hello world ELEPHANT")
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

    //update current user
    usersList[currentUser]["activity"] = selectedActivity;
    usersList[currentUser]["politics"] = selectedPolitics;
    usersList[currentUser]["religion"] = selectedReligion;
    usersList[currentUser]["alcohol"] = selectedAlcohol;
    usersList[currentUser]["tobacco"] = selectedTobacco;
    usersList[currentUser]["cannabis"] = selectedCannabis;

    // Store updated data
    localStorage.setItem("usersList", JSON.stringify(usersList));
}

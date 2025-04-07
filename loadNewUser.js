function load_progress_bar() {
    console.log("LOAD CALL")
    var progress = document.getElementById("progress")
    var width = 0;
    var id = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            progress.style.width = width + "%";
            progress.innerHTML = width * 1 + "%";
        }
    }
}

function load_welcome_page(){
    window.location = "newuser_welcome.html";
}

window.onload = load_progress_bar();
setTimeout(load_welcome_page, 3500);
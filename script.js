// Welcome Message (Only Once)
window.onload = function () {
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Welcome to Hon'ble Shri Ajitdada Pawar Website");
        sessionStorage.setItem("welcomeShown", "true");
    }
};

// Home
function homeAlert() {
    alert("Welcome to the Home Section");
}

// About
function aboutAlert() {
    alert("This is the About Section");
}

// Journey
function journeyAlert() {
    alert("This is the Leadership Journey Section");
}

// Achievements
function achievementAlert() {
    alert("This is the Achievements Section");
}

// Highlights
function highlightsAlert() {
    alert("This is the Highlights Section");
}

// Gallery
function galleryAlert() {
    alert("This is the Gallery Section");
}

// Vision
function visionAlert() {
    alert("This is the Vision Section");
}
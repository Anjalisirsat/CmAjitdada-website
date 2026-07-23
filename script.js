// Welcome Message (Only Once)
window.onload = function () {

    if (window.location.pathname.includes("index.html")) {
        if (!sessionStorage.getItem("welcomeShown")) {
            alert(
                "🙏 Welcome to the Official Website of Hon'ble Shri Ajitdada Pawar.\n\n" +
                "Explore his leadership journey, achievements, development initiatives, vision for Maharashtra, and memorable moments through this website."
            );
            sessionStorage.setItem("welcomeShown", "true");
        }
    }

    if (window.location.pathname.includes("about.html")) {
        alert(
            "📖 About Ajitdada Pawar\n\n" +
            "This section introduces Hon'ble Shri Ajitdada Pawar, highlighting his personal background, political career, leadership qualities, and his commitment to the development of Maharashtra."
        );
    }

    if (window.location.pathname.includes("exp".html")) {
        alert(
            "🏛 Leadership Journey\n\n" +
            "Explore the major milestones of Ajitdada Pawar's political journey, including important positions held, years of public service, and key contributions to the state."
        );
    }

    if (window.location.pathname.includes("achievments.html")) {
        alert(
            "🏆 Achievements\n\n" +
            "Discover the significant development projects, awards, infrastructure initiatives, agricultural reforms, irrigation work, and public welfare achievements under Ajitdada Pawar's leadership."
        );
    }

    if (window.location.pathname.includes("states.html")) {
        alert(
            "⭐ Highlights\n\n" +
            "View the most important events, speeches, government initiatives, and memorable moments that reflect Ajitdada Pawar's leadership and public service."
        );
    }

    if (window.location.pathname.includes("gallery.html")) {
        alert(
            "🖼 Gallery\n\n" +
            "Browse a collection of photographs showcasing public meetings, development projects, official events, and interactions with citizens."
        );
    }

    if (window.location.pathname.includes("vision.html")) {
        alert(
            "🚀 Vision for Maharashtra\n\n" +
            "Learn about Ajitdada Pawar's vision for a progressive Maharashtra through sustainable development, modern infrastructure, quality education, empowered farmers, employment generation, and digital governance."
        );
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about_section");
    const projectsSection = document.querySelector(".projects__container");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe both sections
    observer.observe(aboutSection);
    observer.observe(projectsSection);

    // Navbar scroll behavior
    let prevScrollpos = window.pageYOffset; // Track previous scroll position
    const navbar = document.querySelector('.navbar'); // Select the navbar

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        // Show navbar if scrolling up, hide if scrolling down
        if (prevScrollpos > currentScrollPos) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }

        // Update the previous scroll position
        prevScrollpos = currentScrollPos;
    };
});

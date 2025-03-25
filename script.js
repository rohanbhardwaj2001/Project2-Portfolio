// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const navbarHeight = document.querySelector("header").offsetHeight;
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Resume Download Alert
document.addEventListener("DOMContentLoaded", function () {
    const resumeLink = document.getElementById("resume-link");

    resumeLink.addEventListener("click", function (event) {
        event.preventDefault();  // Prevent default action

        const resumePath = "cv.pdf"; // Ensure this path is correct
        const link = document.createElement("a");
        link.href = resumePath;
        link.setAttribute("download", "Rohan_Bhardwaj_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert("Your resume is downloading...");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault();  // Prevent default form submission

        const form = event.target;
        const status = document.getElementById("status");

        // Convert form data into URL-encoded format
        const formData = new FormData(form);
        const urlEncodedData = new URLSearchParams(formData).toString();

        try {
            let response = await fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"  // Change content type
                },
                body: urlEncodedData
            });

            if (response.ok) {
                status.innerHTML = "✅ Message Sent Successfully!";
                status.style.color = "green";
                form.reset();
            } else {
                status.innerHTML = "❌ Error: Failed to send message.";
                status.style.color = "red";
            }
        } catch (error) {
            status.innerHTML = "❌ Network Error. Please check your internet connection.";
            status.style.color = "red";
        }
    });
});

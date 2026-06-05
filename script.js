async function getInfo() {
    const output = document.getElementById("output");

    output.innerHTML = "<h2>Loading professional profile...</h2>";

    try {
        const response = await fetch(
            "https://runi67it39.execute-api.us-east-2.amazonaws.com/info"
        );

        const data = await response.json();

        output.innerHTML = `
            <div class="profile-card">

                <div class="images">
                    <img src="jax.jpg" alt="Jax Felder">
                    <img src="Second cloud IT.jpg" alt="Cloud Computing">
                </div>

                <h2>${data.name}</h2>
                <p class="profile-tagline">
                    AWS Certified Cloud Practitioner | CIS Student | IT Intern | Cloud & Infrastructure Projects
                </p>

                <div class="profile-grid">

                    <div class="info-card">
                        <h3>Education</h3>
                        <p><span class="label">Major:</span> ${data.major}</p>
                        <p><span class="label">School:</span> ${data.school}</p>
                        <p><span class="label">GPA:</span> 3.8</p>
                    </div>

                    <div class="info-card">
                        <h3>Career Focus</h3>
                        <p><span class="label">Goal:</span> ${data.goal}</p>
                        <p><span class="label">Focus Areas:</span> Cloud Support, IT Support, Infrastructure, Cybersecurity</p>
                    </div>

                    <div class="info-card">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>AWS Lambda, API Gateway, DynamoDB, IAM</li>
                            <li>Python, JavaScript, HTML, CSS</li>
                            <li>Active Directory concepts and help desk workflows</li>
                            <li>Networking, troubleshooting, and cloud fundamentals</li>
                        </ul>
                    </div>

                    <div class="info-card">
                        <h3>Featured Projects</h3>
                        <ul>
                            <li>AWS Serverless Cloud Portfolio</li>
                            <li>Enterprise Active Directory Dashboard</li>
                            <li>IT Help Desk Ticketing System</li>
                            <li>JustAboutXcellence Basketball Training Brand</li>
                        </ul>
                    </div>

                    <div class="info-card">
                        <h3>Certifications</h3>
                        <ul>
                            <li>AWS Certified Cloud Practitioner</li>
                        </ul>
                    </div>

                    <div class="info-card">
                        <h3>Leadership</h3>
                        <p><span class="label">Business:</span> ${data.business}</p>
                        <p>Basketball trainer and business owner with experience in client communication, training plans, and leadership.</p>
                    </div>

                    <div class="info-card">
                        <h3>Contact</h3>
                        <p><span class="label">Email:</span> jaxfelder04@gmail.com</p>
                        <p><span class="label">Phone:</span> 240-435-0990</p>
                        <p><span class="label">Location:</span> Laurel, MD</p>
                    </div>

                </div>

                <div class="profile-links">
                    <a href="Resume .docx.pdf" target="_blank">Resume</a>
                    <a href="https://github.com/jaxfelder04" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/jaxfelder04" target="_blank">LinkedIn</a>
                    <a href="https://hihello.com/p/40dd8923-6345-402a-ac7b-eb580c33e2c4" target="_blank">Business Card</a>
                </div>

            </div>
        `;
    } catch (error) {
        output.innerHTML = "<h2>Failed to load profile data. Please try again.</h2>";
        console.log(error);
    }
}

const titleText = "Jax Felder | Cloud & IT Portfolio";
let i = 0;

function typeTitle() {
    const typedTitle = document.getElementById("typed-title");

    if (i < titleText.length) {
        typedTitle.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 75);
    }
}

/* Rotating Hero Image */

const heroImages = [
    "Cloud IT background.jpg",
    "Second cloud IT.jpg",
    "Third IT photo.jpg",
    "Fourth IT photo.jpg",
    "fifth IT image.jpg",
    "seventh IT image.jpg"
];

let currentHeroImage = 0;

function rotateHeroImage() {
    const img = document.getElementById("rotating-image");

    if (!img) {
        return;
    }

    img.style.opacity = "0";

    setTimeout(() => {
        currentHeroImage++;

        img.src = heroImages[currentHeroImage % heroImages.length];

        img.style.opacity = "1";
    }, 500);
}

/* Particles */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    particles = [];

    for (let j = 0; j < 150; j++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00ff88";
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
        }
    });

    requestAnimationFrame(animateParticles);
}

function showTab(tabId, clickedButton) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".portfolio-tabs button");

    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    buttons.forEach(button => {
        button.classList.remove("active-tab");
    });

    const selectedTab = document.getElementById(tabId);

    if (selectedTab) {
        selectedTab.style.display = "block";
        selectedTab.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (clickedButton) {
        clickedButton.classList.add("active-tab");
    }
}

window.onload = function () {
    typeTitle();
    resizeCanvas();
    createParticles();
    animateParticles();

    setInterval(rotateHeroImage, 5000);
};

window.addEventListener("resize", function () {
    resizeCanvas();
    createParticles();
});
async function getInfo() {
    const output = document.getElementById("output");

    output.innerHTML = "<h2>Loading...</h2>";

    try {
        const response = await fetch(
            "https://runi67it39.execute-api.us-east-2.amazonaws.com/info"
        );

        const data = await response.json();

        output.innerHTML = `
            <div class="profile-card">

                <div class="images">
                    <img src="jax.jpg" alt="Jax">
                    <img src="ai-bg.jpg" alt="AI Robot">
                </div>

                <h2>${data.name}</h2>

                <p><span class="label">Major:</span> ${data.major}</p>
                <p><span class="label">School:</span> ${data.school}</p>
                <p><span class="label">Career Goal:</span> ${data.goal}</p>
                <p><span class="label">Business:</span> ${data.business}</p>

                <h3>Skills</h3>
                <ul>
                    <li>AWS</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>

                <h3>Projects</h3>
                <ul>
                    <li>AWS Cloud Project</li>
                    <li>Basketball Training Brand</li>
                    <li>Power BI Dashboard</li>
                </ul>

                <h3>Certifications</h3>
                <ul>
                    <li>AWS Certified Cloud Practitioner</li>
                </ul>

                <h3>Contact</h3>
                <p><span class="label">Email:</span> jaxfelder04@gmail.com</p>
                <p><span class="label">Location:</span> Laurel, MD</p>

            </div>
        `;
    } catch (error) {
        output.innerHTML = "<h2>Failed to load data.</h2>";
        console.log(error);
    }
}

const titleText = "Welcome to Jax's AWS Project";
let i = 0;

function typeTitle() {
    if (i < titleText.length) {
        document.getElementById("typed-title").textContent += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 75);
    }
}

window.onload = function () {
    typeTitle();
};

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let j = 0; j < 80; j++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
    });
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

animateParticles();
document.addEventListener("DOMContentLoaded", () => {
    const captchaText = document.getElementById("captchaText");
    const captchaInput = document.getElementById("captchaInput");
    const contactForm = document.getElementById("contactForm");

    function generateCaptcha() {
        let randomNum = Math.floor(Math.random() * 9000) + 1000;
        captchaText.textContent = randomNum;
        return randomNum.toString();
    }

    let currentCaptcha = generateCaptcha();

    contactForm.addEventListener("submit", (e) => {
        if (captchaInput.value !== currentCaptcha) {
            e.preventDefault();
            alert("Incorrect CAPTCHA! Try again.");
            currentCaptcha = generateCaptcha();
        }
    });
});

// Elements
const email = document.getElementById("email");
const captchaBox = document.getElementById("captchaBox");
const submitBtn = document.getElementById("submitBtn");

// Generate initial captcha
let captcha = generateCaptcha();

// EMAIL triggers CAPTCHA
email.addEventListener("blur", () => {
    if (email.value.includes("@")) {
        captchaBox.classList.remove("hidden");
        document.getElementById("captchaText").innerText = captcha;
    }
});

// CAPTCHA validation unlocks submit
document.getElementById("captchaInput").addEventListener("input", (e) => {
    if (e.target.value === captcha) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

// FORM SUBMIT
document.getElementById("requestForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Check required fields before OTP
    const requiredFields = [
        "org", "phone", "quantity", "foodType", "location",
        "delivery", "notes", "cookedTime", "email"
    ];

    for (let id of requiredFields) {
        const field = document.getElementById(id);
        if (!field.value || field.value.trim() === "") {
            alert("Please fill out all required fields.");
            return;
        }
    }

    // If Food Type is "Other", require the text box too
    const foodType = document.getElementById("foodType").value;
    const foodOther = document.getElementById("foodOther");
    if (foodType === "Other" && (!foodOther.value || foodOther.value.trim() === "")) {
        alert("Please specify the food type when selecting Other.");
        return;
    }

    // Show OTP box
    document.getElementById("otpBox").classList.remove("hidden");

    // Generate OTP (6 digits)
    window.otp = Math.floor(100000 + Math.random() * 900000);
    alert("OTP: " + window.otp); // simulate sending OTP
});

// OTP VERIFY
function verifyOTP() {
    const val = document.getElementById("otpInput").value;

    if (val == window.otp) {
        document.getElementById("otpBox").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");

        // Reload after 2 seconds
        setTimeout(() => location.reload(), 2000);
    } else {
        alert("Invalid OTP");
    }
}

// Show "Other" text field only when "Other" is selected
function toggleOtherFood() {
    const foodType = document.getElementById("foodType").value;
    const foodOther = document.getElementById("foodOther");

    if (foodType === "Other") {
        foodOther.classList.remove("hidden");
        foodOther.setAttribute("required", "true");
    } else {
        foodOther.classList.add("hidden");
        foodOther.removeAttribute("required");
        foodOther.value = ""; // clear if not needed
    }
}

// CAPTCHA generator
function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7);
}

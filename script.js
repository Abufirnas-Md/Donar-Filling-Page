// PRIORITY BUTTONS
const urgentBtn = document.getElementById("urgentBtn");
const normalBtn = document.getElementById("normalBtn");

urgentBtn.addEventListener("click", () => {
    urgentBtn.classList.add("active-urgent");
    normalBtn.classList.remove("active-normal");
});

normalBtn.addEventListener("click", () => {
    normalBtn.classList.add("active-normal");
    urgentBtn.classList.remove("active-urgent");
});


// SHOW SECTIONS STEP-BY-STEP
function validateStep(currentId, nextId) {
    const currentSection = document.getElementById(currentId);

    // simple required validation
    const inputs = currentSection.querySelectorAll("input, select, textarea");
    for (let input of inputs) {
        if (!input.value) {
            alert("Please fill all fields before continuing.");
            return;
        }
    }

    currentSection.style.display = "none";
    document.getElementById(nextId).style.display = "block";
}


// FOOD TYPE — show text field if "Others"
document.getElementById("foodtype").addEventListener("change", function () {
    const value = this.value;

    if (value === "Others(Drinks, Fruits)") {
        document.getElementById("foodDetails").style.display = "block";
    } else {
        document.getElementById("foodDetails").style.display = "block";
    }
});


// OTP BUTTON
document.querySelector(".otp-btn").addEventListener("click", () => {
    const number = document.getElementById("mobile").value;

    if (!number.match(/^[0-9]{10}$/)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    // FAKE OTP GENERATION
    const otp = Math.floor(100000 + Math.random() * 900000);

    alert("OTP sent: " + otp + "\n(Use this for testing)");

    // Store OTP for verification
    sessionStorage.setItem("donorOTP", otp);
});


// FORM SUBMIT
document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let userOTP = prompt("Enter the OTP you received:");
    let realOTP = sessionStorage.getItem("donorOTP");

    if (userOTP == realOTP) {
        alert("Donation Submitted Successfully ✔");

        // redirect after success
        window.location.href = "https://abufirnas-md.github.io/Filling-Page/";
    } else {
        alert("Incorrect OTP ❌");
    }
});

let generatedOTP = "";

function sendOTP() {
  // Generate a simple 4-digit OTP
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  alert("Your OTP is: " + generatedOTP); // In real app, send via SMS
  document.getElementById("otpBox").classList.remove("hidden");
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otpInput").value;
  if (enteredOTP === generatedOTP) {
    alert("OTP Verified Successfully!");
    document.getElementById("otpBox").classList.add("hidden");
    document.getElementById("donationDetails").classList.remove("hidden");
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById("location").value =
        position.coords.latitude + ", " + position.coords.longitude;
    });
  } else {
    alert("Geolocation not supported.");
  }
}

document.getElementById("donorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("donationDetails").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
});

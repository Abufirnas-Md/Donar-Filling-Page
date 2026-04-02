document.addEventListener('DOMContentLoaded', () => {
    const urgentBtn = document.getElementById('urgentBtn');
    const foodDetails = document.getElementById('foodDetails');

    urgentBtn.addEventListener('click', () => {
        urgentBtn.classList.add('active-urgent');
        document.getElementById('normalBtn').classList.remove('active-normal');
        foodDetails.style.display = 'block';
    });
});

// Function to check if fields in the current section are filled before moving next
function validateAndNext(currentSectionId, nextSectionId) {
    const currentSection = document.getElementById(currentSectionId);
    const inputs = currentSection.querySelectorAll('input, select, textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity(); // Shows the "Please fill out this field" tooltip
            allFilled = false;
        }
    });

    if (allFilled) {
        showSection(nextSectionId);
    }
}

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

// Final Submission
document.getElementById('donationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your donation request has been submitted.');
});

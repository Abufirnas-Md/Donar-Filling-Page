document.addEventListener('DOMContentLoaded', () => {
    const urgentBtn = document.getElementById('urgentBtn');
    const normalBtn = document.getElementById('normalBtn');
    const foodDetails = document.getElementById('foodDetails');

    // Click Urgent to start the flow
    urgentBtn.addEventListener('click', () => {
        urgentBtn.classList.add('active-urgent');
        normalBtn.classList.remove('active-normal');
        foodDetails.style.display = 'block';
    });

    // Handle final submission
    document.getElementById('donationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Success! Your donation has been recorded.');
        this.reset();
        window.location.reload(); // Reset the view
    });
});

/**
 * Validates only the visible fields in the current step
 * before showing the next section.
 */
function validateStep(currentId, nextId) {
    const currentSection = document.getElementById(currentId);
    const inputs = currentSection.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity(); // Triggers the "Please fill out this field" tooltip
            isValid = false;
        }
    });

    if (isValid) {
        const nextSection = document.getElementById(nextId);
        nextSection.style.display = 'block';
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

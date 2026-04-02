document.addEventListener('DOMContentLoaded', () => {
    const urgentBtn = document.getElementById('urgentBtn');
    const normalBtn = document.getElementById('normalBtn');
    const foodDetails = document.getElementById('foodDetails');

    // Toggle Urgent Logic
    urgentBtn.addEventListener('click', () => {
        urgentBtn.classList.add('active-urgent');
        normalBtn.classList.remove('active-normal');
        
        // Show the first hidden section (Food Description/Quantity/Time)
        foodDetails.style.display = 'block';
    });

    normalBtn.addEventListener('click', () => {
        normalBtn.classList.add('active-normal');
        urgentBtn.classList.remove('active-urgent');
        // Logic for normal can be added here if needed
    });

    // Final form submission
    document.getElementById('donationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Donation submitted successfully!');
    });
});

// Function to transition between sections
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        // Smooth scroll to the new section
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

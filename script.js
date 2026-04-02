document.addEventListener('DOMContentLoaded', () => {
    const urgentBtn = document.getElementById('urgentBtn');
    const normalBtn = document.getElementById('normalBtn');
    const form = document.getElementById('donationForm');

    // 1. Handle Priority Toggle
    urgentBtn.addEventListener('click', () => {
        urgentBtn.classList.add('active-urgent');
        normalBtn.classList.remove('active-normal');
    });

    normalBtn.addEventListener('click', () => {
        normalBtn.classList.add('active-normal');
        urgentBtn.classList.remove('active-urgent');
    });

    // 2. Navigation Function
    // We attach this to the global window object so the HTML onclick can find it
    window.showSection = (sectionId) => {
        // Hide all sections
        document.getElementById('foodDetails').style.display = 'none';
        document.getElementById('locationSection').style.display = 'none';
        document.getElementById('finalSection').style.display = 'none';

        // Show the requested section
        const target = document.getElementById(sectionId);
        if (target) {
            target.style.display = 'block';
            // Scroll to top of card for better UX on mobile
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // 3. Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple validation check
        const phone = form.querySelector('input[type="tel"]').value;
        if (!phone) {
            alert('Please enter your mobile number and verify via OTP.');
            return;
        }

        alert('Thank you! Your donation has been submitted successfully.');
        // Here you would typically use fetch() to send data to your backend
        console.log("Donation data ready for submission");
    });

    // 4. Handle File Input (AI Freshness Check Mockup)
    const fileInput = document.getElementById('foodPhoto');
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            console.log("Photo uploaded: Scanning for freshness...");
            // You could add a loading spinner here to simulate the AI check
        }
    });
});

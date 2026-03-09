// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Rule 3: Informative Feedback
    // Highlight the clicked link so the user knows where they are
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Rule 7: Internal Locus of Control
    // Automatically close the mobile menu after a link is clicked
    const navBar = document.querySelector('.navbar-collapse');
    const bcollapse = new bootstrap.Collapse(navBar, {toggle: false});
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bcollapse.hide();
            }
        });
    });

    // Rule 8: Reduce Short-term Memory Load
    // If the user scrolls down, we could make the navbar 'sticky' 
    // so they don't have to scroll back up to find the menu.
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        header.classList.toggle('sticky-top', window.scrollY > 0);
    });
});
// body
const modal = document.getElementById('bookingModal');
const roomTitle = document.getElementById('selectedRoomTitle');
const bookingForm = document.getElementById('bookingForm');
const dateInput = document.getElementById('checkin');

// Rule 7: Keeping User in Control
function openBooking(roomName) {
    roomTitle.innerText = `Confirm ${roomName}`;
    modal.style.display = 'flex';
    
    // Rule 5: Prevent Errors - Set minimum date to today automatically
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute('min', today);
}

// Rule 6: Easy Reversal
function closeModal() {
    modal.style.display = 'none';
    bookingForm.reset(); // Clear form data
}

// Rule 4: Design Dialogs to Yield Closure
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedDate = dateInput.value;
    
    // Rule 3: Informative Feedback
    alert(`Booking Confirmed!\nDate: ${selectedDate}\n\nThank you for using HostelHub.`);
    
    closeModal();
});

// Rule 6: Reversal (Close modal if user clicks the dark background)
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Function to display the modal with bus details
function showBusDetails(bus) {
    document.getElementById('modal-header').textContent = `Details for ${bus}`;
    document.getElementById('modal').classList.add('show');
    document.getElementById('modal-overlay').classList.add('show');
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('modal-overlay').classList.remove('show');
}

// Function to toggle seat selection
function toggleSeat(seat) {
    seat.classList.toggle('selected');
}

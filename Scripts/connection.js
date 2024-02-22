
const seatPrice = 550;

function calculateTotalPrice(selectedSeats) {
    let totalSeats = selectedSeats.length;
    let totalPrice = totalSeats * seatPrice;

    if (totalSeats === 8) {
        document.getElementById("submitBtn").style.backgroundColor = "green";
        document.getElementById("submitBtn").style.color = "white";
        totalSeats -= 1; 
    } else if (totalSeats === 4) {
        for (let i = 0; i < selectedSeats.length; i++) {
            document.getElementById(selectedSeats[i]).disabled = true; // 
        }
    }

    for (let i = 0; i < selectedSeats.length; i++) {
        document.getElementById(selectedSeats[i]).innerText = `Seat ${selectedSeats[i]} - $${seatPrice}`;
    }

    return totalPrice;
}

document.getElementById("submitBtn").addEventListener("click", function() {
    let selectedSeats = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach(function(checkbox) {
        selectedSeats.push(checkbox.value);
    });

});

// -------------------------------------------------------------------------------------------------------------------






// ==================================================================================================================
const seatCountDisplay = document.getElementById("seatCount");

function updateSeatCount(selectedSeats) {
    seatCountDisplay.textContent = selectedSeats.length;
}

document.getElementById("submitBtn").addEventListener("click", function() {
    let selectedSeats = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach(function(checkbox) {
        selectedSeats.push(checkbox.value);
    });
    updateSeatCount(selectedSeats);
});
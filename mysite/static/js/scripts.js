window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        window.location.reload(); // Reload if the page was loaded from the cache
    }
});
window.addEventListener('load', function () {
    // Get the form element
    const form = document.querySelector('.form-area form');
    if (form) {
        form.reset(); // Reset the form fields to their default values
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const currentTimeElement = document.getElementById('current-time');
    const currentDateElement = document.getElementById('current-date');
    let currentDateTime = new Date(currentTimeElement.textContent); // Get initial time from the element

    function formatDateTime(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        return {
            time: `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`, // Convert hours to 12-hour format
            date: `${day}/${month}/${year}` // Format date as day/month/year
        };
    }

    function updateTime() {
        // Increment seconds
        currentDateTime.setSeconds(currentDateTime.getSeconds() + 1);
        // Format the current date and time
        const formattedDateTime = formatDateTime(currentDateTime);
        currentTimeElement.textContent = formattedDateTime.time;
        currentDateElement.textContent = formattedDateTime.date; // Update date element
    }

    // Initialize the display
    const formattedDateTime = formatDateTime(currentDateTime);
    currentTimeElement.textContent = formattedDateTime.time;
    currentDateElement.textContent = formattedDateTime.date; // Initialize date display
    
    // Update the time every second
    setInterval(updateTime, 1000);
});

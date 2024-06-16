document.getElementById('report-hazard-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const hazardType = document.getElementById('hazard-type').value;
    const description = document.getElementById('hazard-description').value;
    const location = document.getElementById('hazard-location').value;

    const response = await fetch('/api/hazards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hazardType, description, location })
    });

    if (response.ok) {
        document.getElementById('success-message').style.display = 'block';
    } else {
        // Handle error case
        alert('Failed to report hazard. Please try again.');
    }
});

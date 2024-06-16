document.getElementById('incidentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const response = await fetch('/api/incidents/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, location })
    });

    const data = await response.json();
    if (response.status === 201) {
        alert('Incident reported successfully');
        document.getElementById('incidentForm').reset();
    } else {
        alert('Error reporting incident: ' + data.message);
    }
});

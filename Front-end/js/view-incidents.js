async function fetchIncidents() {
    const response = await fetch('/api/incidents/all');
    const incidents = await response.json();
    
    const incidentsDiv = document.getElementById('incidents');
    incidentsDiv.innerHTML = '';
    
    incidents.forEach(incident => {
        const incidentElement = document.createElement('div');
        incidentElement.classList.add('incident');
        incidentElement.innerHTML = `
            <h2>${incident.title}</h2>
            <p>${incident.description}</p>
            <p>${incident.location}</p>
            <p>${new Date(incident.date).toLocaleString()}</p>
        `;
        incidentsDiv.appendChild(incidentElement);
    });
}

fetchIncidents();

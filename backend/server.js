// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock data
const incidents = [
  { id: 1, type: 'Flood', location: 'River City', severity: 'High', description: 'Major flooding reported in downtown area.', lat: 40.7128, lng: -74.0060 },
  { id: 2, type: 'Fire', location: 'Forest County', severity: 'Medium', description: 'Wildfire spreading in northern region.', lat: 34.0522, lng: -118.2437 },
  { id: 3, type: 'Earthquake', location: 'Shaky Town', severity: 'Low', description: 'Minor tremors felt in the early morning.', lat: 37.7749, lng: -122.4194 },
];

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

app.get('/api/incidents/:id', (req, res) => {
  const incident = incidents.find(inc => inc.id === parseInt(req.params.id));
  if (incident) {
    res.json(incident);
  } else {
    res.status(404).json({ message: 'Incident not found' });
  }
});

app.post('/api/incidents', (req, res) => {
  const newIncident = {
    id: incidents.length + 1,
    ...req.body
  };
  incidents.push(newIncident);
  res.status(201).json(newIncident);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
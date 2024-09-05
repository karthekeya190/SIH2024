import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

// Fix for Leaflet's icon path issues with webpack
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [filter, setFilter] = useState('All');
  const mapRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/incidents')
      .then(response => response.json())
      .then(data => setIncidents(data))
      .catch(error => console.error('Error fetching incidents:', error));

    // Initialize the map
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([39.8283, -98.5795], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || incidents.length === 0) return;

    // Clear existing markers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });

    // Add new markers
    incidents.forEach(incident => {
      const marker = L.marker([incident.lat, incident.lng]).addTo(mapRef.current);
      marker.bindPopup(`<h3>${incident.type}</h3><p>${incident.description}</p>`);
    });
  }, [incidents]);

  const filteredIncidents = filter === 'All' 
    ? incidents 
    : incidents.filter(incident => incident.type === filter);

  const chartData = [
    { name: 'Jan', incidents: 4 },
    { name: 'Feb', incidents: 3 },
    { name: 'Mar', incidents: 2 },
    { name: 'Apr', incidents: 7 },
    { name: 'May', incidents: 5 },
  ];

  return (
    <div className="container">
      <h1>DisasterSift Dashboard</h1>
      
      <div className="summary-cards">
        <div className="card">
          <h2>Total Incidents</h2>
          <p className="large-number">{incidents.length}</p>
        </div>
        <div className="card">
          <h2>High Severity</h2>
          <p className="large-number high-severity">
            {incidents.filter(i => i.severity === 'High').length}
          </p>
        </div>
        <div className="card">
          <h2>Active Alerts</h2>
          <p className="large-number active-alerts">2</p>
        </div>
      </div>

      <div className="data-visualization">
        <div className="card">
          <h2>Incident Map</h2>
          <div id="map" style={{ height: '400px' }}></div>
        </div>
        <div className="card">
          <h2>Incidents Over Time</h2>
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="incidents" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      <div className="filter-section">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Flood">Flood</option>
          <option value="Fire">Fire</option>
          <option value="Earthquake">Earthquake</option>
        </select>
      </div>

      <div className="incident-list">
        {filteredIncidents.map(incident => (
          <div key={incident.id} className="card incident-card">
            <h2>{incident.type} - {incident.location}</h2>
            <p><strong>Severity:</strong> {incident.severity}</p>
            <p>{incident.description}</p>
            {incident.severity === 'High' && (
              <div className="high-priority-alert">
                <span>⚠️ High Priority</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
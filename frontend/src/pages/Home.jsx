// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="home">
      <h1>Campaigns</h1>
      <div className="campaigns-grid">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <div key={campaign._id} className="campaign-card">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <p><strong>Goal:</strong> ${campaign.goal}</p>
              <p><strong>Created by:</strong> {campaign.createdBy?.username || 'Unknown User'}</p>
            </div>
          ))
        ) : (
          <p>No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
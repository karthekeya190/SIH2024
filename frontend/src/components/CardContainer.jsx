import React, { useState } from 'react';
import './CardContainer.css';
import Dashboard from './Dashboard';

const cardsData = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png',
    title: 'Twitter',
    shortDescription: 'Source of information about disaster 1.',
    detailedDescription: 'Twitter plays a crucial role during disasters by serving as a real-time communication tool that spreads vital information. It allows emergency responders, government agencies, and news outlets to share updates instantly, reaching a vast audience within seconds. Users can follow hashtags related to specific disasters (#EarthquakeAlert, #FloodUpdate) to stay informed about unfolding events, safety measures, and rescue operations. Twitter also enables affected individuals to share their location and needs, helping rescue teams prioritize efforts. Its ability to rapidly disseminate verified information while offering a platform for community support makes it an essential tool during crises.',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
    title: 'Facebook',
    shortDescription: 'Source of information about disaster 2.',
    detailedDescription: 'Facebook has been playing a crucial role in disaster management by enabling rapid communication and coordination during emergencies. Its platform allows users to share real-time information, report missing persons, request aid, and connect with local organizations. Tools like Facebook Crisis Response feature, which includes Safety Check, helps users mark themselves safe during disasters. It also aids in crowdsourcing data for relief efforts, making it easier for governments, NGOs, and volunteers to respond effectively to natural disasters and emergencies.',
  },
  {
    id: 3,
    image: 'https://arulmjoseph.com/wp-content/uploads/2017/11/Must-have-Features-Of-A-Best-Online-News-Portal-Design-1200x900.jpg',
    title: 'News Portal',
    shortDescription: 'Source of information about disaster 3.',
    detailedDescription: 'Detailed information about disaster 3 from News Portal.',
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg',
    title: 'Instagram',
    shortDescription: 'Source of information about disaster 4.',
    detailedDescription: 'Detailed information about disaster 4 from Instagram.',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3guYr0koqCKQuOR2Z-R79CEl-GF7va94SQ&s',
    title: 'Watsapp',
    shortDescription: 'Source of information about disaster 5.',
    detailedDescription: 'Detailed information about disaster 5 from WhatsApp.',
  },
];

const CardContainer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleBack = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-container">
         <div className="vertical-heading" >
        <h1>Information Sources</h1>
      </div>
      {selectedCard ? (
        <div className="card-details">
          <button className="back-button" onClick={handleBack}>Back</button>
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.detailedDescription}</p>
        </div>
      ) : (
        <div className="cards-grid">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`card ${card.id === 5 ? 'center-card' : 'surrounding-card'}`}
              onClick={() => handleCardClick(card)}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.shortDescription}</p>
            </div>
          ))}
        </div>
      )}
   
    </div>
  );
};

export default CardContainer;

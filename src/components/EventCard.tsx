import React from 'react';
import './EventCard.css';

const EventCard = ({ image, title, date }: { image: string, title: string, date: string }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
      </div>
    </div>
  );
}

export default EventCard;

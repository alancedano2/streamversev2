import React from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
        <img src="/images/wm41-bg.jpg" alt="WrestleMania 41" className="hero-image" />
        <h1 className="event-title">WrestleMania 41</h1>
      </div>
      <div className="event-carousel">
        <EventCard image="/images/event1.jpg" title="WWE SmackDown" date="April 25, 2025" />
        <EventCard image="/images/event2.jpg" title="NBA Finals" date="June 12, 2025" />
        <EventCard image="/images/event3.jpg" title="AEW Dynamite" date="May 10, 2025" />
      </div>
    </div>
  );
}

export default App;

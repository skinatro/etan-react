import { useState } from "react";
import "./Events.css";
import FloatingLines from "../floating-lines/FloatingLines";
import EventsHero from "../Events/EventsHero";
import EventCategoryTabs from "../Events/EventCatergoryTabs";
import EventsGrid from "../Events/EventsGrid";

const Events = () => {
  const [eventType, setEventType] = useState("ongoing"); // "ongoing" or "completed"
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="events-wrapper">
      {/* Background Animation Layer */}
      <div className="events-bg-layer">
        <FloatingLines
          linesGradient={["#34D399", "#06B6D4", "#8B5CF6", "#afacac"]}
          enabledWaves={['middle', 'bottom']}
          lineCount={[15, 15]}
          lineDistance={[8, 8]}
          bottomWavePosition={{ x: 0, y: -1.5, rotate: 1.85 }}
          middleWavePosition={{ x: 2, y: 1.5, rotate: 1.85 }}
          animationSpeed={3.3}
          parallaxStrength={0.5}
          interactive={true}
          bendStrength={-3}
        />
      </div>

      {/* Content Layer */}
      <div className="events-content">
        <div className="events-container">
          {/* Hero Section */}
          <EventsHero />

          {/* Filters Section */}
          <div className="events-filters">
            {/* Event Type Toggle (Ongoing/Completed) */}
            <div className="year-toggle">
              <button
                onClick={() => setEventType("ongoing")}
                className={`year-button ${
                  eventType === "ongoing" ? "active" : ""
                }`}
              >
                Ongoing Events
              </button>
              <button
                onClick={() => setEventType("completed")}
                className={`year-button ${
                  eventType === "completed" ? "active" : ""
                }`}
              >
                Completed Events
              </button>
            </div>

            {/* Category Tabs */}
            <EventCategoryTabs
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="🔍 Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Events Grid */}
          <EventsGrid
            eventType={eventType}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
const EventFilters = ({
  eventType,
  setEventType,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="events-filters">
      {/* Event Type Toggle (Ongoing/Completed) */}
      <div className="year-toggle">
        <button
          onClick={() => setEventType("ongoing")}
          className={`year-button ${eventType === "ongoing" ? "active" : ""}`}
        >
          Ongoing Events
        </button>
        <button
          onClick={() => setEventType("completed")}
          className={`year-button ${eventType === "completed" ? "active" : ""}`}
        >
          Completed Events
        </button>
      </div>

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
  );
};

export default EventFilters;
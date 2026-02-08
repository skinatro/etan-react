import EventCard from "./EventCard";
import { eventsData } from "../../data/eventsData";

const EventsGrid = ({ eventType, selectedCategory, searchQuery }) => {
  // Get events based on type (ongoing or completed)
  const events = eventsData[eventType] || [];

  // Filter events based on category and search query
  const filteredEvents = events.filter((event) => {
    // Category filter
    const matchesCategory =
      selectedCategory === "All Events" ||
      event.category === selectedCategory;

    // Search filter
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Show empty state if no events match
  if (filteredEvents.length === 0) {
    return (
      <div className="events-empty">
        <h3>No events found</h3>
        <p>
          {searchQuery
            ? "Try adjusting your search or filters"
            : eventType === "ongoing" 
              ? "No upcoming events at the moment. Check back soon!"
              : "No completed events to display."}
        </p>
      </div>
    );
  }

  return (
    <div className="events-grid">
      {filteredEvents.map((event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          isOngoing={eventType === "ongoing"}
        />
      ))}
    </div>
  );
};

export default EventsGrid;
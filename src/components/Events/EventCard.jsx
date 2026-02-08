const EventCard = ({ event, isOngoing }) => {
  // Determine border color class based on category or use a cycling pattern
  const borderColors = ['border-cyan', 'border-blue', 'border-purple', 'border-pink', 'border-green', 'border-red'];
  const colorIndex = event.id ? event.id % borderColors.length : 0;
  const borderClass = borderColors[colorIndex];

  // Determine button class based on border color
  const buttonClass = borderClass.replace('border-', 'btn-event-');

  return (
    <div className={`event-card ${borderClass}`}>
      {/* Event Date Badge */}
      <div className="event-date">
        📅 {event.date}
      </div>

      {/* Title */}
      <h3>{event.title}</h3>

      {/* Description */}
      <p>{event.description}</p>

      {/* Event Footer */}
      <div className="event-card-footer">
        <div className="event-details">
          <span>🕐 {event.time}</span>
          <span>📍 {event.venue}</span>
        </div>
        
        {/* Show registration button only for ongoing events */}
        {isOngoing && (
          <button className={buttonClass}>
            Register Now →
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
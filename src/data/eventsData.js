export const eventsData = {
  ongoing: [
    // Empty for now - add upcoming events here when available
  ],
  completed: [
    {
      id: 1,
      title: "Let's Talk Code: LLM Workshop",
      category: "Workshop",
      description:
        "Learn practical prompting, RAG basics, and build a simple app integrating an LLM API",
      date: "Feb 6, 2025",
      time: "03:00 PM",
      venue: "SFIT, Room 128",
    },
    {
      id: 2,
      title: "Mosaic: Ghost Protocol",
      category: "Competition",
      description:
        "Team up (2–4 members) and build the secrets to the ancient code",
      date: "Mar 25, 2025",
      time: "09:00 AM",
      venue: "SFIT",
    },
    {
      id: 3,
      title: "CSI x AECC – CYBERSECURITY WORKSHOP",
      category: "Seminar",
      description: "What's in store? Free Trip to Top Australian Universities",
      date: "Mar 25, 2025",
      time: "09:00 AM",
      venue: "SFIT",
    },
  ],
};

// Categories for filtering
export const categories = [
  { name: "All Events" },
  { name: "Workshop" },
  { name: "Competition" },
  { name: "Seminar" },
];
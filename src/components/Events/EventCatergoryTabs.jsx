const EventCategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
  // Define categories based on your data
  const categories = [
    { name: "All Events" },
    { name: "Workshop" },
    { name: "Competition" },
    { name: "Seminar" },
  ];

  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`category-pill ${
            selectedCategory === category.name ? "active" : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default EventCategoryTabs;
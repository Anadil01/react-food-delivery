const MenuCategory = ({ data, showItems, setShowIndex }) => {
    
    return (
      <div className="menu-category">
  
        <div
          className="category-header"
          onClick={setShowIndex}
        >
          <span>
            {data.title} ({data.items.length})
          </span>
  
          <span>{showItems ? "▲" : "▼"}</span>
        </div>
  
        {showItems && (
          <div className="category-items">
            {data.items.map((item) => (
              <div key={item.id} className="menu-item">
                {item.name} - ₹{item.price}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default MenuCategory;
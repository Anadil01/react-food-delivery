import { useState } from "react";

const MenuCategory = ({data})=>{
    const [showItems , setShowItems] = useState(false)
    return(
        <div className="menu-category">
            <div className="category-header" onClick={()=> setShowItems(!showItems)}>
                
                <h3>
                    {data.title} ({data.items.length})
                </h3>
                <span>{showItems ? "▲" : "▼"}</span>
            </div>
            {showItems && (

        <div className="category-items">
        {data.items.map((item)=> (
         <div key={item.id}  className="menu-item">
         <span>{item.name}</span>
         <span>{item.price}</span>
        </div>
       ))}
       </div>
     )}
     </div>
    );
};

export default MenuCategory;
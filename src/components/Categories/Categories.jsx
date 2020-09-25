import React from "react";

export default function Categories({items, onClickItem, activeCategories}) {

  console.log(activeCategories);

  return (
    <div className="categories">
      <ul>
        <li className={activeCategories == null ? "active" : ""} onClick={() => onClickItem(null)}>Все</li>
        {items.map((item, index) => 
          <li 
            key={`${index}_${item}`} 
            onClick={() => onClickItem(item)}
            className={activeCategories == item ? "active" : ""}>
              {item}
          </li>)
        }
      </ul>
    </div>
  );
}

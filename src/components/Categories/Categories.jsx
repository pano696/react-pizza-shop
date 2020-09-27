import React from "react";

const Categories = ({items, onClickItem, activeCategories}) => {

  const onSelectItem = (category) => {
    onClickItem(category);
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeCategories == null ? "active" : ""} onClick={() => onSelectItem(null)}>Все</li>
        {items &&
          items.map((item, index) => 
            <li 
              key={`${index}_${item}`} 
              onClick={() => onSelectItem(item)}
              className={activeCategories === item ? "active" : ""}>
                {item}
            </li>)
        }
      </ul>
    </div>
  );
}

export default Categories;
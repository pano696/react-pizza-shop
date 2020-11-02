import React from "react";

const Categories = ({items, onClickItem, activeCategories}) => {

  const onSelectItem = (index) => {
    onClickItem(index);
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeCategories == null ? "active" : ""} onClick={() => onSelectItem(null)}>Все</li>
        {items &&
          items.map((item, index) =>
            <li
              key={`${index}_${item}`}
              onClick={() => onSelectItem(index)}
              className={activeCategories === index ? "active" : ""}>
                {item}
            </li>)
        }
      </ul>
    </div>
  );
}

export default Categories;

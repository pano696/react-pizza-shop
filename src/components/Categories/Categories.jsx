import React from "react";

export default function Categories({items}) {

  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => <li key={`${index}_${item}`}>{item}</li>)}
      </ul>
    </div>
  );
}

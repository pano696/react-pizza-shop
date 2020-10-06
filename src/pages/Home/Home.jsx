import React, { useState } from 'react'
import { Categories, Sort, PizzaBlock } from '../../components'


const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sorting = ['популярности', 'цене', 'алфавиту'];

function Home({items}) {

  const [activeCatgories, setActiveCategories] = useState(null);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} onClickItem={(name) => setActiveCategories(name)} activeCategories={activeCatgories} />
        <Sort items={sorting} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.name} {...obj}/>
        ))}
      </div>
    </div>
  )
}

export default Home

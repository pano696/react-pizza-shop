import React, { useState } from 'react'
import { Categories, Sort, PizzaBlock } from '../../components'


const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sorting = [{name :'популярности', type: 'popular'}, {name: 'цене', type: 'cost'}, {name: 'алфавиту', type :"alphabet"}];

function Home({items}) {

  const [activeCatgories, setActiveCategories] = useState(null);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} onClickItem={(index) => setActiveCategories(index)} activeCategories={activeCatgories} />
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

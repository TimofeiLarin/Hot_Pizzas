import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import { Categories, SortPopup, PizzasBlock } from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const items = useSelector((state) => {
    const { pizzas } = state;
    return pizzas.items;
  });

  const dispatch = useDispatch();
  const onClickItem = React.useCallback((id) => {
    dispatch(setCategory(id));
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categoryNames} onClickItem={onClickItem} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items && items.map((pizza) => <PizzasBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';
import { Categories, SortPopup, PizzasBlock, PizzaLoadingBlock } from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const { items, isLoaded } = useSelector(({ pizzas }) => {
    return { items: pizzas.items, isLoaded: pizzas.isLoaded };
  });
  const { category, sortBy } = useSelector((state) => {
    const { filter } = state;
    return filter;
  });
  const cartItems = useSelector(({ cart }) => cart.items);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);
  const onClickCategory = React.useCallback((id) => {
    dispatch(setCategory(id));
  }, []);
  const onClickSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  const onClickAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categoryNames} categoryId={category} onClickCategory={onClickCategory} />
        <SortPopup items={sortItems} sortByType={sortBy.type} onClickSort={onClickSort} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((pizza) => (
              <PizzasBlock onClickAddPizza={onClickAddPizza} addedCountPizza={cartItems[pizza.id] && cartItems[pizza.id].length} key={pizza.id} {...pizza} />
            ))
          : Array(12)
              .fill(0)
              .map((_, id) => <PizzaLoadingBlock key={id} />)}
      </div>
    </div>
  );
};

export default Home;

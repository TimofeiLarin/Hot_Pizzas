import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

const PizzasBlock = ({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCountPizza }) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(types[0]);
  const onSelectType = (id) => {
    setActiveType(id);
  };

  const availableSizes = [26, 30, 40];
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const onSelectSize = (type) => {
    setActiveSize(type);
  };
  const onAddPizza = () => {
    const obj = { id, name, imageUrl, price, size: activeSize, type: availableTypes[activeType] };
    onClickAddPizza(obj);
  };

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt={name} />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {availableTypes.map((type, id) => {
            return (
              <li
                key={`${type}_${id}`}
                className={classNames({
                  active: activeType === id,
                  disabled: !types.includes(id),
                })}
                onClick={() => onSelectType(id)}
              >
                {type}
              </li>
            );
          })}
        </ul>
        <ul>
          {availableSizes.map((type, id) => {
            return (
              <li
                key={`${type}_${id}`}
                className={classNames({
                  active: activeSize === type,
                  disabled: !sizes.includes(type),
                })}
                onClick={() => onSelectSize(type)}
              >
                {type} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <Button onClick={onAddPizza} className='button--add' outline>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {addedCountPizza && <i>{addedCountPizza}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzasBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
  addedCountPizza: PropTypes.number,
};

PizzasBlock.defaultProps = {
  types: [],
  sizes: [],
};

export default PizzasBlock;

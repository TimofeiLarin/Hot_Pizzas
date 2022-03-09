import { useState, memo } from 'react';

const Categories = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (id) => {
    setActiveItem(id);
    onClickItem(id);
  };

  return (
    <div className='categories'>
      <ul>
        <li className={activeItem === null ? 'active' : null} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, id) => {
            return (
              <li
                className={activeItem === id ? 'active' : null}
                onClick={() => onSelectItem(id)}
                key={`${item}_${id}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;

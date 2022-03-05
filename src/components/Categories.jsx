import { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
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
};

export default Categories;

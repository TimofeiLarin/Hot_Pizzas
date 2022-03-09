import { memo } from 'react';
import PropTypes from 'prop-types';


const Categories = memo(({ items, onClickCategory, categoryId }) => {
 console.log(categoryId)
  return (
    <div className='categories'>
      <ul>
        <li className={categoryId === null ? 'active' : null} onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((item, id) => {
            return (
              <li
                className={categoryId === id ? 'active' : null}
                onClick={() => onClickCategory(id)}
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

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryId: PropTypes.number,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  items: [],
  categoryId: null,
};

export default Categories;

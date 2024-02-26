import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import css from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilterValue(value));
  };

  const clearFilter = () => {
    dispatch(setFilterValue(''));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter to search..."
        value={filter}
        onChange={handleFilterChange}
      />
      {filter && (
        <button className={css.button} onClick={clearFilter}>
          Clear
        </button>
      )}
    </div>
  );
}

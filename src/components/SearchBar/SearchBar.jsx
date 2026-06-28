import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar({ value, onChange, onAdd }) {
  return (
    <div className="searchbar">
      <div className="search-input-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Ada görə axtar..."
        />
        {value && (
          <button className="search-clear" onClick={() => onChange('')}>✕</button>
        )}
      </div>
      <button className="btn-add" onClick={onAdd}>
        + Profil əlavə et
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd:    PropTypes.func.isRequired,
};

export default SearchBar;

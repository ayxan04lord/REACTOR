import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';
import batman from '../../img/batman.jpg';
import './WhoAmI.css';

const COLORS = [
  { label: 'White',  value: '#ffffff' },
  { label: 'Red',    value: '#ff4757' },
  { label: 'Green',  value: '#2ed573' },
  { label: 'Purple', value: '#a55eea' },
  { label: 'Gold',   value: '#ffa502' },
];

function WhoAmI({ id, name, surname, link, onDelete }) {
  const navigate = useNavigate();
  // Sayac localStorage-da saxlanılır — useLocalStorage custom hook
  const [count, setCount]       = useLocalStorage(`count-${id}`, 0);
  const [color, setColor]       = useState('#ffffff');
  const [input, setInput]       = useState('');
  const [batmanOn, setBatmanOn] = useState(false);

  // useRef — inputa birbaşa focus vermək üçün
  const inputRef = useRef(null);

  // useEffect — title-ı aktiv kartın sayacına görə yenilə
  useEffect(() => {
    document.title = `Reaktor | ${name}: ${count} klik`;
    return () => { document.title = 'React Profillər'; };
  }, [count, name]);

  const handleBatman = () => {
    if (input.toLowerCase() === 'batman') {
      setBatmanOn(true);
    } else {
      setBatmanOn(false);
      inputRef.current?.focus(); // useRef ilə focus
    }
  };

  return (
    <div
      className={`card ${batmanOn ? 'batman-active' : ''}`}
      style={batmanOn ? { backgroundImage: `url(${batman})` } : {}}
    >
      {/* Sil düyməsi */}
      <button
        className="card-delete"
        onClick={() => onDelete(id)}
        title="Profili sil"
      >
        ✕
      </button>

      {/* Header */}
      <div className="card-header">
        <div className="avatar">{name[0]}{surname[0]}</div>
        <div className="card-title">
          <h2>{name} {surname}</h2>
          <a href={link} target="_blank" rel="noreferrer">🔗 Profile</a>
          <button className="view-profile-btn" onClick={() => navigate(`/profile/${id}`)}>
            👤 Detallar
          </button>
        </div>
      </div>

      <div className="card-body">
        {/* Sayac */}
        <div className="counter-section">
          <span className="section-label">Klik sayı</span>
          <span className="counter-value" style={{ color }}>{count}</span>
          <div className="counter-btns">
            <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
              + Artır
            </button>
            <button className="btn btn-ghost" onClick={() => setCount(0)}>
              Sıfırla
            </button>
          </div>
        </div>

        {/* Rəng seçici */}
        <div className="color-section">
          <span className="section-label">Rəng seç</span>
          <div className="color-swatches">
            {COLORS.map(c => (
              <button
                key={c.value}
                className={`swatch ${color === c.value ? 'active' : ''}`}
                style={{ background: c.value }}
                onClick={() => setColor(c.value)}
                title={c.label}
              />
            ))}
          </div>
        </div>

        {/* Batman rejimi */}
        <div className="batman-section">
          <input
            ref={inputRef}
            className="text-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleBatman()}
            placeholder="'batman' yaz..."
          />
          <button className="btn btn-dark" onClick={handleBatman}>
            🦇 Aktivləşdir
          </button>
          {batmanOn && <span className="badge">Batman Mode 🦇</span>}
        </div>
      </div>
    </div>
  );
}

WhoAmI.propTypes = {
  id:       PropTypes.number.isRequired,
  name:     PropTypes.string.isRequired,
  surname:  PropTypes.string.isRequired,
  link:     PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WhoAmI;

import { useNavigate } from 'react-router-dom';
import './About.css';

const features = [
  { icon: '⚛️', title: 'React 18',        desc: 'Funksional komponentlər, hooks' },
  { icon: '⚡', title: 'Vite',             desc: 'Ultra sürətli dev server və build' },
  { icon: '🛣️', title: 'React Router v6', desc: 'Çox səhifəli naviqasiya' },
  { icon: '🌐', title: 'REST API',         desc: 'useFetch hook ilə randomuser.me' },
  { icon: '💾', title: 'localStorage',     desc: 'useLocalStorage custom hook' },
  { icon: '🎨', title: 'Dark / Light',     desc: 'useContext ilə global tema' },
  { icon: '✅', title: 'Prop Types',       desc: 'Props validasiyası' },
  { icon: '📦', title: 'Komponent struct', desc: 'pages/, components/, hooks/, data/' },
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Geri</button>

      <div className="about-hero">
        <span className="about-logo">⚛️</span>
        <h1>Reaktor</h1>
        <p>React öyrənmək üçün yaradılmış layihə. Hər xüsusiyyət real dünya nümunəsidir.</p>
      </div>

      <div className="features-grid">
        {features.map(f => (
          <div className="feature-card" key={f.title}>
            <span className="feature-icon">{f.icon}</span>
            <div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-footer">
        <p>React hooks, routing və API ilə işləmə qaydalarını əhatə edir.</p>
        <button className="btn-home" onClick={() => navigate('/')}>
          🏠 Ana Səhifəyə Qayıt
        </button>
      </div>
    </div>
  );
}

export default About;

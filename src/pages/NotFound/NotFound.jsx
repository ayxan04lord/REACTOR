import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-msg">Səhifə tapılmadı</p>
      <p className="notfound-sub">Axtardığın URL mövcud deyil.</p>
      <button onClick={() => navigate('/')}>🏠 Ana Səhifəyə Qayıt</button>
    </div>
  );
}

export default NotFound;

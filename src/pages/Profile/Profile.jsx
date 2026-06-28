import { useParams, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import useFetch from '../../hooks/useFetch';
import initialUsers from '../../data/users';
import './Profile.css';

function Profile() {
  const { id }       = useParams();           // URL-dən :id oxu
  const navigate     = useNavigate();
  const [users]      = useLocalStorage('users', initialUsers);

  const user = users.find(u => String(u.id) === id);

  // randomuser.me — seed kimi user id istifadə et ki, hər dəfə eyni nəticə gəlsin
  const { data, loading, error } = useFetch(
    user ? `https://randomuser.me/api/?seed=${id}&nat=us,gb,fr,de` : null
  );

  const random = data?.results?.[0];

  if (!user) {
    return (
      <div className="profile-error">
        <span>😕</span>
        <h2>Profil tapılmadı</h2>
        <button onClick={() => navigate('/')}>← Geri qayıt</button>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Geri
      </button>

      <div className="profile-card">
        {/* Sol — lokal məlumat */}
        <div className="profile-left">
          <div className="profile-avatar-big">
            {user.name[0]}{user.surname[0]}
          </div>
          <h1>{user.name} {user.surname}</h1>
          <a
            href={user.link}
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            🔗 Profile Link
          </a>
        </div>

        {/* Sağ — API məlumatı */}
        <div className="profile-right">
          <h2 className="section-title">Random User API məlumatı</h2>

          {loading && (
            <div className="api-loading">
              <div className="spinner" />
              <p>Məlumat yüklənir...</p>
            </div>
          )}

          {error && (
            <div className="api-error">
              <span>⚠️</span>
              <p>API xətası: {error}</p>
            </div>
          )}

          {random && !loading && (
            <div className="api-data">
              <img
                className="api-photo"
                src={random.picture.large}
                alt="random user"
              />
              <div className="api-info">
                <div className="info-row">
                  <span className="info-label">👤 Ad</span>
                  <span>{random.name.first} {random.name.last}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📧 Email</span>
                  <span>{random.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📞 Telefon</span>
                  <span>{random.phone}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">🌍 Ölkə</span>
                  <span>{random.location.country}, {random.location.city}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">🎂 Yaş</span>
                  <span>{random.dob.age}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">⚧ Cins</span>
                  <span style={{ textTransform: 'capitalize' }}>{random.gender}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

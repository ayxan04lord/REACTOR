import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import SearchBar from '../../components/SearchBar/SearchBar';
import WhoAmI from '../../components/WhoAmI/WhoAmI';
import AddUserModal from '../../components/AddUserModal/AddUserModal';
import initialUsers from '../../data/users';
import './Home.css';

function Home() {
  const [users, setUsers]     = useLocalStorage('users', initialUsers);
  const [search, setSearch]   = useState('');
  const [showModal, setModal] = useState(false);

  const handleAdd = ({ name, surname, link }) => {
    setUsers(prev => [...prev, { id: Date.now(), name, surname, link }]);
  };

  const handleDelete = id => {
    setUsers(prev => prev.filter(u => u.id !== id));
    localStorage.removeItem(`count-${id}`);
  };

  const filtered = users.filter(u =>
    `${u.name} ${u.surname}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home-header">
        <h1>React Profillər</h1>
        <p>{filtered.length} / {users.length} profil göstərilir</p>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        onAdd={() => setModal(true)}
      />

      {filtered.length === 0 ? (
        <div className="empty">
          <span>🔍</span>
          <p>Heç bir profil tapılmadı</p>
        </div>
      ) : (
        <main className="cards-grid">
          {filtered.map(u => (
            <WhoAmI key={u.id} {...u} onDelete={handleDelete} />
          ))}
        </main>
      )}

      {showModal && (
        <AddUserModal
          onAdd={handleAdd}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}

export default Home;

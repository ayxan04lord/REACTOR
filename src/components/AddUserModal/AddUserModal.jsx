import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './AddUserModal.css';

const empty = { name: '', surname: '', link: '' };

function AddUserModal({ onAdd, onClose }) {
  const [form, setForm]     = useState(empty);
  const [errors, setErrors] = useState({});
  const nameRef             = useRef(null);

  // Modal açılanda birinci inputa avtomatik focus — useRef + useEffect
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // Escape ilə bağla
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Ad boş ola bilməz';
    if (!form.surname.trim()) errs.surname = 'Soyad boş ola bilməz';
    if (form.link && !/^https?:\/\/.+/.test(form.link))
      errs.link = 'Link https:// ilə başlamalıdır';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onAdd({ ...form, link: form.link || '#' });
    onClose();
  };

  const handleChange = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Yeni Profil</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Ad</label>
            <input
              ref={nameRef}
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Rza"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field">
            <label>Soyad</label>
            <input
              value={form.surname}
              onChange={handleChange('surname')}
              placeholder="Talibov"
            />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>

          <div className="field">
            <label>Link (optional)</label>
            <input
              value={form.link}
              onChange={handleChange('link')}
              placeholder="https://..."
            />
            {errors.link && <span className="error">{errors.link}</span>}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Ləğv et
            </button>
            <button type="submit" className="btn-save">
              Əlavə et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddUserModal.propTypes = {
  onAdd:   PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddUserModal;

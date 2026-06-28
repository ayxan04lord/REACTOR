# ⚛️ Reaktor

React öyrənmək üçün yaradılmış praktik layihə. Hər xüsusiyyət real dünya nümunəsidir.

## 🚀 Başlamaq

```bash
npm install
npm run dev
```

Brauzdə aç: [http://localhost:5173](http://localhost:5173)

## 📦 Skriptlər

| Əmr | Təsvir |
|-----|--------|
| `npm run dev` | Dev server işlət |
| `npm run build` | Production build |
| `npm run preview` | Build nəticəsini yerli preview et |

## 🛠️ Texnologiyalar

- **React 18** — funksional komponentlər, hooks
- **Vite** — ultra sürətli build aləti
- **React Router v6** — client-side routing
- **prop-types** — props validasiyası

## 📁 Layihə Strukturu

```
src/
├── components/
│   ├── Navbar/         # Naviqasiya, tema toggle
│   ├── WhoAmI/         # Profil kartı
│   ├── SearchBar/      # Axtarış + əlavə et düyməsi
│   └── AddUserModal/   # Yeni profil modal formu
├── pages/
│   ├── Home/           # Ana səhifə — profil siyahısı
│   ├── Profile/        # Profil detalları + API məlumatı
│   ├── About/          # Layihə haqqında
│   └── NotFound/       # 404 səhifəsi
├── context/
│   └── ThemeContext.jsx  # Dark / Light tema (useContext)
├── hooks/
│   ├── useLocalStorage.js  # localStorage custom hook
│   └── useFetch.js         # REST API custom hook
└── data/
    └── users.js        # İlkin istifadəçi məlumatları
```

## 🧠 Öyrənilən React konseptləri

| Konsept | Harada istifadə olunur |
|---------|------------------------|
| `useState` | Kart state-ləri — sayac, rəng, batman |
| `useEffect` | Tab title, event listener, auto-focus |
| `useRef` | Input-a focus, DOM müraciəti |
| `useContext` | Global dark/light tema |
| `useNavigate` / `useParams` | Router naviqasiyası |
| Custom hook — `useLocalStorage` | Sayac və user datası saxlanır |
| Custom hook — `useFetch` | API-dan data çəkmə, loading/error |
| `prop-types` | Komponent props validasiyası |

## 🌐 API

Profil detalları səhifəsində [randomuser.me](https://randomuser.me) API-dan real məlumat çəkilir:
foto, ad, email, telefon, ölkə, yaş.

## ✨ Xüsusiyyətlər

- Profil əlavə et / sil
- Ada görə axtarış / filtr
- Batman rejimi 🦇
- Sayac (localStorage-da saxlanır)
- Rəng seçici
- Dark / Light tema
- Responsiv dizayn

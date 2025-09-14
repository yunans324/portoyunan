import { useEffect, useState } from 'react';

function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('hero');

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
  }, [theme]);

  useEffect(() => {
    const sections = ['hero','about','projects'];
    const handler = () => {
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.3) {
          current = id; break;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="navbar">
      <h2 style={{margin:0,fontSize:'1.05rem'}}>Yunan's Portfolio</h2>
      <ul style={{display:'flex',gap:'18px',alignItems:'center',margin:0,padding:0,listStyle:'none'}}>
        <li><a className={active==='hero'? 'active':''} href="#hero">Home</a></li>
        <li><a className={active==='about'? 'active':''} href="#about">About</a></li>
        <li><a className={active==='projects'? 'active':''} href="#projects">Projects</a></li>
        <li>
          <button
            type="button"
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={() => setTheme(t => t==='dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const root = aboutRef.current;
    if (!root) return;
    const numbers = Array.from(root.querySelectorAll('.highlight-box .number'));
    const original = numbers.map(n => n.getAttribute('data-target'));
    let done = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !done) {
          done = true;
          numbers.forEach((el, i) => {
            const target = parseInt(original[i] || '0', 10);
            const duration = 1200;
            const start = performance.now();
            const plus = /\+$/.test(el.textContent || '') ? '+' : '';
            function tick(now) {
              const p = Math.min(1, (now - start) / duration);
              const val = Math.floor(p * target);
              el.textContent = p === 1 ? `${target}${plus}` : `${val}`;
              if (p < 1) requestAnimationFrame(tick);
              else if (plus) el.textContent = `${target}+`;
            }
            el.textContent = '0';
            requestAnimationFrame(tick);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.35 });
    obs.observe(root.querySelector('.about-highlights'));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about about-animated">
      <h2 className="about-title">About Me</h2>
      <p className="about-intro">
        Saya <strong>Yunan</strong>, seorang <strong>Frontend Developer</strong> yang fokus pada
        pembuatan antarmuka web yang bersih, cepat, dan mudah digunakan. Saya senang
        memecah masalah UI menjadi komponen reusable dan mengeksplor cara membuat
        pengalaman pengguna lebih nyaman.
      </p>

      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_,i) => (
            <span key={i} className="marquee-seq">Frontend • React • UI/UX • Accessibility • Performance • Design Systems •</span>
          ))}
        </div>
      </div>

      <div className="about-highlights">
        <div className="highlight-box">
          <span className="number" data-target="1">1+</span>
          <span className="label">Tahun Belajar</span>
        </div>
        <div className="highlight-box">
          <span className="number" data-target="10">10+</span>
          <span className="label">Mini Project</span>
        </div>
        <div className="highlight-box">
          <span className="number" data-target="3">3</span>
          <span className="label">Fokus: UI / UX / React</span>
        </div>
      </div>

      <h3 className="subsection">Skill & Tools</h3>
      <ul className="skills-list">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Routing', 'UI/UX', 'Git', 'Responsive Design'].map(s => (
          <li key={s} className="skill-tag">{s}</li>
        ))}
      </ul>

      <div className="rotating-words">
        <span className="static">I build</span>
        <span className="rotator" aria-label="rotating focus words">
          <span>interfaces</span>
          <span>experiences</span>
          <span>components</span>
          <span>performance</span>
        </span>
      </div>

      <h3 className="subsection">Mini Timeline</h3>
      <ul className="timeline">
        <li>
          <span className="tl-year">2024</span>
          Mulai mendalami React & komponen fungsional.
        </li>
        <li>
          <span className="tl-year">2025</span>
          Eksperimen dengan desain UI/UX & membangun proyek pribadi.
        </li>
        <li>
          <span className="tl-year ongoing">Now</span>
          Fokus meningkatkan performa, aksesibilitas, dan pola arsitektur front-end.
        </li>
      </ul>

      <p className="about-closing">
        Saat ini saya terus belajar dan terbuka untuk kolaborasi atau masukan.
        Jika ingin terhubung—silakan scroll ke bawah atau buka bagian kontak (akan ditambahkan!).
      </p>
    </section>
  );
}

export default About;

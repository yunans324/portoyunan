import aku from '../assets/aku.jpg';

function Hero() {
  return (
    <section id="hero" className="hero" style={{ textAlign: "center", padding: "40px" }}>
      <img 
        src={aku} 
        alt="Foto Yunan" 
        style={{ 
          width: "200px", 
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%", 
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)" 
        }} 
      />
      <h1>Hi, I'm <span>Yunan</span> 👋</h1>
      <p>Frontend Developer | React Enthusiast</p>
    </section>
  );
}

export default Hero;


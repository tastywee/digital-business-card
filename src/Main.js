import envelopeIcon from "./images/envelope-solid.svg";

export default function Main() {
  return (
    <main>
      <h1>Joshua Masangcay</h1>
      <h3>Frontend Developer</h3>
      <h4>joshua-masangcay.netlify.app</h4>
      <a href="mailto:josh.tanay@gmail.com" className="email-btn" rel="icon">
        <img src={envelopeIcon} alt="an envelope" />
        Email
      </a>
      <div className="content">
        <h2>About</h2>
        <p>
          A React enthusiast and front-end developer aiming to create a sleek,
          efficient, and user-friendly web experiences. With a passion for
          simplicity in code, I thrive on transforming complex challenges into
          elegant solutions. I stay at the forefront of technology, continuously
          updating my skill set to ensure I deliver the best possible solutions.
        </p>
        <h2>Interests</h2>
        <p>
          Foods. Video games. Music. Basketball. Movies and animes. Comics and
          mangas. Internet and technology.
        </p>
      </div>
    </main>
  );
}

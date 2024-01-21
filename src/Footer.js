import twitterIcon from "./images/twitter.svg";
import fbIcon from "./images/square-facebook.svg";
import igIcon from "./images/square-instagram.svg";
import linkedinIcon from "./images/linkedin.svg";
import githubIcon from "./images/square-github.svg";

export default function Footer() {
  return (
    <footer>
      <a href="@" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="twitter icon" />
      </a>
      <a
        href="https://www.facebook.com/joshweeee/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fbIcon} alt="facebook icon" />
      </a>
      <a
        href="https://www.instagram.com/tastywee/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={igIcon} alt="instagram icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/joshua--masangcay/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
      <a href="https://github.com/tastywee" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="github icon" />
      </a>
    </footer>
  );
}

import joshuaImage from "./images/joshua.jpg";

export default function Header() {
  return (
    <header>
      <img
        src={joshuaImage}
        className="joshua-photo"
        alt="Joshua profile pic"
      />
    </header>
  );
}

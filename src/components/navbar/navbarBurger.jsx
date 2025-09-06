import "./hamburger.css";
export default function NavbarBurger({ onOpen, isOpen }) {
  return (
    <button
      className={`inline-block hamburger hamburger--emphatic ${
        isOpen ? "is-active" : ""
      } lg:hidden`}
      type="button"
      onClick={onOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}

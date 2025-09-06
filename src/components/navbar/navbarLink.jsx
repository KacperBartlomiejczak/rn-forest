import classes from "./navbar.module.css";

export default function NavbarLink({ children, onClose, link = "#" }) {
  return (
    <li className="">
      <a
        href={link}
        className={`text-base font-light ${classes.link} sm:text-xl  md:text-lg hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        {children}
      </a>
    </li>
  );
}

import logo from "../../assets/tree.svg";

export default function NavbarHeading() {
  return (
    <div className="relative flex flex-row gap-2 items-center p-3 z-20 ">
      <img src={logo} alt="tree as logo for forest company" />
      <h1 className="text-xl font-light md:text-2xl ">Forest</h1>
    </div>
  );
}

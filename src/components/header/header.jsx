import ShadowImg from "../UI/shadowImg";

export default function Header() {
  return (
    <header className="bg-[url(./assets/img/hero-small.jpg)] bg-center bg-cover p-12 relative flex justify-center items-center">
      <div className="container relative z-50 text-white ">
        <p className="font-light">Forest Group</p>
        <h2 className="font-bold">Najpiękniejszy park w Twojej okolicy!</h2>
      </div>
      <ShadowImg />
    </header>
  );
}

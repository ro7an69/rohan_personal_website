import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full flex-wrap items-center justify-between bg-background p-0 font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:bg-d-background dark:text-d-text-primary">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;

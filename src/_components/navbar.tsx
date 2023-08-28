import { ModeToggle } from "./displayMode-toggle";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-end">
      <ModeToggle />
    </nav>
  );
};

export default Navbar;

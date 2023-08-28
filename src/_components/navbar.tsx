import { ModeToggle } from "./displayMode-toggle";

const Navbar = () => {
  return (
    <nav className="px-10 py-4 flex justify-between bg-white dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tighter">malek sehili</h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;

export default function MenuBurger({ handleShowMenu }) {
  return (
    <button
      onClick={handleShowMenu}
      className="z-[999] flex flex-col items-center justify-center space-y-1.5 p-1 lg:hidden"
    >
      <div className="h-px w-4 bg-white" />
      <div className="h-px w-4 bg-white" />
      <div className="h-px w-4 bg-white" />
    </button>
  );
}

import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
type Props = {
    toggleDarkMode: () => void,
    darkMode: boolean
}

export default function Navbar({ toggleDarkMode, darkMode }: Props) {
  return (
    <nav className="flex justify-between mx-2 items-center my-4 py-4 border-b-3 border-gray-400">
      <h1 className="text-blue-400 text-4xl font-bold dark: text-blue-400">MovieManiac</h1>
      <div className="flex justify-end gap-4 items-center ">
      <button onClick={toggleDarkMode}
className={`cursor-pointer h-10 w-10 rounded-full duration-200 ${darkMode ? "" : ""}`}>
      {darkMode ? <img src={Sun} alt="sun icon" className="h-8 w-8 m-auto" /> : <img src={Moon} alt="moon icon" className="h-8 w-8 m-auto" />}
      </button>
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </nav>
  );
}

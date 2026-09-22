import { useContext } from "react";
import { Link } from "react-router";
import { ThemeDataContext } from "../context/ThemeContext";

export default function Navbar() {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <nav
      className={`flex px-10 py-5 justify-between items-center border-b-2 border-gray-300 ${theme === "dark" && "bg-gray-700"} duration-300`}
    >
      <h1 className="text-3xl text-indigo-600 font-semibold">Routing</h1>
      <div className={`flex gap-5 font-semibold text-gray-700 ${theme === "dark" && "text-white"} duration-300`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/product"}>Product</Link>
        <span className="capitalize">{theme}</span>
      </div>
    </nav>
  );
}

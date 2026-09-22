import { useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeDataContext } from "../context/ThemeContext";

export default function SubNav() {
  const navigate = useNavigate();
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="w-full space-x-4 p-2">
      <button
        onClick={() => navigate("/")}
        className="px-3 py-2 bg-emerald-400 text-white font-medium rounded-md cursor-pointer"
      >
        Go to Home Page
      </button>
      <button
        onClick={() => navigate(-1)}
        className="px-3 py-2 bg-emerald-400 text-white font-medium rounded-md cursor-pointer"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="px-3 py-2 bg-emerald-400 text-white font-medium rounded-md cursor-pointer"
      >
        Next
      </button>
      <button
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
        className="px-3 py-2 bg-sky-400 text-white font-medium rounded-md cursor-pointer"
      >
        Change Theme
      </button>
    </div>
  );
}

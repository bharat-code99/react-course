import { Link, Outlet } from "react-router";

export default function Product() {
  return (
    <>
      <div className="text-gray-800 text-center mt-10 space-x-4">
        <Link className="text-xl font-medium text-gray-700 cursor-pointer" to="men">
          Men
        </Link>
        <Link className="text-xl font-medium text-gray-700 cursor-pointer" to="women">
          Women
        </Link>
      </div>
      <Outlet />
    </>
  );
}

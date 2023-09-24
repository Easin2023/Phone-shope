import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 mx-4 shadow-md">
      <h1 className="text-2xl font-semibold">Phone Shop</h1>
      <ul className=" flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

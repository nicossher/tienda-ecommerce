import { NavLink } from "react-router-dom";

const CategoryItem = ({ isActive = false, route }) => {
  return (
    <NavLink
      className={`nav-link fs-5 px-xxl-4 px-3 ${({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}`}
      aria-current='page'
      to={route.path}
    >
      {route.name}
    </NavLink>
  );
};

export default CategoryItem;

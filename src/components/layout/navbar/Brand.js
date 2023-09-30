import { NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";

const Brand = () => {
  return (
    <NavLink to={"/"} className='navbar-brand m-0' href='#'>
      <img src={logo} />
    </NavLink>
  );
};

export default Brand;

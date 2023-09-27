import Brand from "./navbar/Brand";
import MenuButton from "./navbar/MenuButton";
import CategoryItem from "./navbar/CategoryItem";
import CartWidget from "../carrito/CartWidget";

function NavBar() {
  return (
    <nav className='navbar navbar-expand-xl bg-body-correct sticky-top bg-dark navbar-dark'>
      <div className='container-fluid mx-xl-5'>
        <Brand />
        <MenuButton />
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto pe-xl-5'>
            <li className='nav-item'>
              <CategoryItem isActive={true} name='Inicio' />
            </li>
            <li className='nav-item'>
              <CategoryItem isActive={false} name='Zapatillas' />
            </li>
            <li className='nav-item'>
              <CategoryItem isActive={false} name='Camisetas' />
            </li>
            <li className='nav-item'>
              <CategoryItem isActive={false} name='Shorts' />
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

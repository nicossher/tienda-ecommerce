import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItem from "./CategoryItem";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className='navbar navbar-expand-xl bg-body-correct sticky-top bg-dark navbar-dark'>
      <div className='container-fluid mx-xl-5'>
        <Brand />
        <MenuButton />
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto pe-xl-5'>
            <li className='nav-item'>
              <CategoryItem isActive={true} name='Novedades' />
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
            <li className='nav-item me-xxl-5'>
              <CategoryItem isActive={false} name='Accesorios' />
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

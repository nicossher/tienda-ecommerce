import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItem from "./CategoryItem";
import CarWidget from "./CarWidget";

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Brand />
        <MenuButton />
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
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
            <li className='nav-item'>
              <CategoryItem isActive={false} name='Accesorios' />
            </li>
          </ul>
          <CarWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

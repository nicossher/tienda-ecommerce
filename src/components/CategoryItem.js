const CategoryItem = ({ isActive = false, name }) => {
  return (
    <a
      className={`nav-link fs-5 px-xxl-4 px-3 ${isActive ? "active" : null}`}
      aria-current='page'
      href='#'
    >
      {name}
    </a>
  );
};

export default CategoryItem;

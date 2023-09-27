import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

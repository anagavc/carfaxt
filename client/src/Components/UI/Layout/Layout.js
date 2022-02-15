import Navbar from "./Navbar";
import Footer from "../../Sections/Footer";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;

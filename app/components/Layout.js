import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;

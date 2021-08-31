import LNavbar from "./components/navbar/LNavbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import { Switch, Redirect, Route } from "react-router-dom";
import Product from "./components/products/Product";

function App() {
  return (
    <div>
      <LNavbar />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products/" component={Products} />
        {/* <Route path="/home" exact component={LNavbar} /> */}
        <Redirect to="/home" />
      </Switch>
      <Product />
      <Footer />
    </div>
  );
}

export default App;

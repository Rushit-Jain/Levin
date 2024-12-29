import React, { useState } from "react";
import LNavbar from "./components/navbar/LNavbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/home";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductCategory from "./components/products/ProductCategory";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const ProductWithCategory = (props) => {
  // console.log("App.js : ",props);
  return (
    <ProductCategory
      categoryName={props.selectedCategoryName}
      range={props.match.params.range}
      category={props.match.params.category}
    />
  );
};

function App() {
  const [selectedCategoryName, changeSelectedCategoryName] = useState(null);
  return (
    <div>
      <LNavbar />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/home" component={Home} />
        <Route
          path="/products/:range/:category"
          render={({ match }) => (
            <ProductWithCategory
              match={match}
              selectedCategoryName={selectedCategoryName}
            />
          )}
        />
        <Route
          path="/products/:range"
          component={() => (
            <Products changeSelectedCategoryName={changeSelectedCategoryName} />
          )}
        />
        <Redirect to="/home" />
      </Switch>
      {/* <Product /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

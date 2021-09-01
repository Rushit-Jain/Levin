import React, { useState } from "react";
import LNavbar from "./components/navbar/LNavbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import ProductCategory from "./components/products/ProductCategory";

const ProductWithCategory = (props) => {
  console.log(props);
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
    </div>
  );
}

export default App;

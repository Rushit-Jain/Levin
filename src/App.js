import LNavbar from "./components/navbar/LNavbar";
import Footer from "./components/footer/Footer";
import { Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <LNavbar />
      <Switch>
        {/* <Route path="/home" exact component={LNavbar} />
        <Route path="/about" exact component={LNavbar} />
        <Route path="/products" exact component={LNavbar} />
        <Route path="/contact" exact component={LNavbar} /> */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

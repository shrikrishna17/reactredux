import "./App.css";
import Header from "./containers/header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/productListing.js";
import ProductDetails from "./containers/productDetail.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

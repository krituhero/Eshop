import React from "react";
import Productpage from "./components/Products/Productpage";
import Blogspage from "./components/Blogs/Blogspage";
import Index from "./Index.jsx"
import About from "./components/About/About"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Index} />
      <Route path="/blog" Component={Blogspage} />
      <Route path="/products" Component={Productpage} />
      <Route path="/about" Component={About} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

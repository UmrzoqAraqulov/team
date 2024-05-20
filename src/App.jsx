import { Route, Routes } from "react-router-dom";

import AAA from "./pages/AAA";
import About from "./pages/about";
import { Fragment } from "react";
import Home from "./pages/home";
import Layout from "./components/layout";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aaa" element={<AAA />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

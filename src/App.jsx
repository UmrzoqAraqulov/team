import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import About from "./pages/about";
import Nusratillo from "./pages/nusratillo";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="nusratillo" element={<Nusratillo />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import About from "./pages/about";
import Lutfullo from "./pages/lutfullo/Lutfullo";

function App() {

    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="lutfullo" element={<Lutfullo />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;

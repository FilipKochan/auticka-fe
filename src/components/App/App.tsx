import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../containers/Home";
import Layout from "../Layout";
import MyAccount from "../../containers/MyAccount";
import OwnSituations from "../../containers/OwnSituations";
import SituationsTests from "../../containers/SituationsTests";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vlastni-situace" element={<OwnSituations />} />
          <Route path="/testy" element={<SituationsTests />} />
          <Route path="/muj-ucet" element={<MyAccount />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

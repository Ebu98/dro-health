import React from "react";

import { Route, Routes } from "react-router";
import Char from "../Page/characterPage";
import Main from "../Page/main";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/char" element={<Char />} />
  </Routes>
);

export default App;

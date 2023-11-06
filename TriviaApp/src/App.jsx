import Home from "./views/Home";
import Match from "./views/Match";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Match" element={<Match/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

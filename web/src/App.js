import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Authorization />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

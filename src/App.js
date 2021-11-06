import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const hello = "Hello Youtube";

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button
        className="button"
        onClick={() => navigate("/page1", { replace: false })}
      >
        P1
      </button>
      <button onClick={() => navigate("/page2", { replace: false })}>P2</button>
      <button onClick={() => navigate("/page3")}>P3</button>
      <Routes>
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 hello={hello} />} />
        {/* wrap all components in element prop/ */}
      </Routes>
    </div>
  );
}

export default App;

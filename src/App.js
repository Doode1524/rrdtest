import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const hello = "Hello Youtube";

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => history.push("/page1")}>P1</button>
      <button onClick={() => history.push("/page2")}>P2</button>
      <button onClick={() => history.push("/page3")}>P3</button>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route
          exact
          path="/page3"
          render={(props) => <Page3 {...props} hello={hello} />}
        />
      </Switch>
    </div>
  );
}

export default App;

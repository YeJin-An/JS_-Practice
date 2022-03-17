import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter VS HashRouter
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Hello from "./routes/Hello";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <Hello />
        </Route>
        <Route path="/movie/:id">
          {/* id라는 부분은 내가 받게 될 변수의 이름이다 */}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

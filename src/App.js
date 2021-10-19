import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
    </Switch>
  );
}

export default App;

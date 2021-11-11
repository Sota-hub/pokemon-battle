import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SohtaTestPage from "./pages/SohtaTestPage";
import Ready from "./pages/Ready";
import Battle from "./pages/Battle";
import CutIn from "./components/CutIn/CutIn";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/cutin" exact>
        <CutIn />
      </Route>
      <Route path="/ready" exact>
        <Ready />
      </Route>
      {/* Test Pages */}
      <Route path="/sohta" exact>
        <SohtaTestPage />
      </Route>

      <Route path="/ready" exact>
        <Ready />
      </Route>
      <Route path="/battle" exact>
        <Battle />
      </Route>
    </Switch>
  );
}

export default App;

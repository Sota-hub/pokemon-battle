import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SotaTestPage from "./pages/SotaTestPage";
import SohtaTestPage from "./pages/SohtaTestPage";
import Ready from "./pages/Ready";
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
      <Route path="/sota" exact>
        <SotaTestPage />
      </Route>
      <Route path="/sohta" exact>
        <SohtaTestPage />
      </Route>
    </Switch>
  );
}

export default App;

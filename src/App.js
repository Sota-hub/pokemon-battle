import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SotaTestPage from "./pages/SotaTestPage";
import SohtaTestPage from "./pages/SohtaTestPage";
import Ready from "./pages/Ready";
import CutInTest from "./pages/CutInTest";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/sota" exact>
        <SotaTestPage />
      </Route>
      <Route path="/sohta" exact>
        <SohtaTestPage />
      </Route>
      <Route path="/cutin" exact>
        <CutInTest />
      </Route>
      <Route path="/ready" exact>
        <Ready />
      </Route>
    </Switch>
  );
}

export default App;

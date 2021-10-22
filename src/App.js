import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SotaTestPage from "./pages/SotaTestPage";
import SohtaTestPage from "./pages/SohtaTestPage";
import Ready from "./pages/Ready";
import BattleHome from "./components/BattleHome";

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
      <Route path="/ready" exact>
        <Ready />
      </Route>
      <Route path="/battle" exact>
        <BattleHome />
      </Route>
    </Switch>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>  
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

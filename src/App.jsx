import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>Peliculas Estrenos</h1>
      </header>
      <main>
        <Switch>
          <Route path="/movie">Movie</Route>
          <Route path="">Home</Route>
        </Switch>
      </main>
    </Router>
  );
};
